
import pandas as pd
import numpy as np
import urllib.parse
from jinja2 import Template
import os, glob


def download_tour(komoot_url, authenticator, connector):
    """gets gpx file from komoot"""
    tour_id = komoot_url.split('/tour/')[1].split('?ref')[0]
    tour = connector.get_tour_by_id(tour_identifier=tour_id)
    tour.generate_gpx_track(authenticator)
    return tour
    

def add_komoot_url_to_collection(komoot_url,authenticator, connector, **kwargs):
    """downlaods gpx file and adds line in gpxs/info.csv with gpx information"""
    tour = download_tour(komoot_url,authenticator,connector)

    # find name of new gpx
    gpxs = sorted(glob.glob('gpxs/*.gpx'))
    last_int = int(os.path.splitext(os.path.basename(gpxs[-1]))[0])
    i = last_int + 1

    name = kwargs.get('name', None)
    if name is None: 
        name= tour.name.replace(" ", "").replace(".", "_")
    d=({'i':str(i).zfill(3), 
       'name': name ,
       'distance': int(tour.distance/1000), 
       'elevation': int(tour.elevation_up),
      'url': "https://rdspt.com/inlawsgravel/gpxs/%s.gpx"%str(i).zfill(3)})

    #save gpx file
    gpx = tour.gpx_track
    with open("gpxs/%s.gpx"%d['i'], "w") as f:
        f.write( gpx.to_xml())
        
    #add file info to csv
    df_newrow = pd.DataFrame(d, index=[i])
    df_newrow.to_csv('gpxs/info.csv', mode='a', header=False, index=False)
    return None

def make_html_table(route_info_file='gpxs/info.csv'):
    """takes csv of route info and makes html page"""
    df = pd.read_csv(route_info_file, dtype={'i':str})
    df.sort_index(ascending=False, inplace=True)
    with open('template.html') as f:
        template = Template(f.read())
    with open('index.html', 'w') as f:
        f.write(template.render(df_values = df.values ))
    return None

def make_new_gpx_pages(route_info_file='gpxs/info.csv'):
    df = pd.read_csv(route_info_file, dtype={'i':str})
    df.sort_index(ascending=False, inplace=True)
    for i, row in df.iterrows():
        if not os.path.exists('gpx_studio_pages/%s.html'%row.i):
            make_gpx_page(url=row.url, page_name='gpx_studio_pages/%s.html'%row.i, desc=row['name'])
    return None

def make_gpx_page(url, page_name, desc=''):
    """makes a page with embedded open gpx map.
    url = url of gpx file
    page_name = what to save html file as 
    desc = text to have above open gpx frame"""
    url_parsed = urllib.parse.quote_plus("""{"urls":["%s"]}""" % (url))
                                                               
    iframe_url = "https://gpx.studio/?state=%s&embed&distance" % url_parsed
    a_url =  "https://gpx.studio/?state=%s" % url_parsed

    template = Template("""
<!DOCTYPE html>
<html lang="en">
<body>
<div class="main">
<main>
<center>
     <div class="text", style="font-size: 32px; text-decoration:underline;margin-bottom: 0.2cm;">
         <a href = "{{ gpx_url }}" >{{ desc }}</a> <br />
            </div>
  <iframe src="{{  a_url }}&embed&distance"
            width="96%"
            height="800"
            frameborder="0"
            allowfullscreen
            style="border:5px solid #ff0000;">
                <p><a href="{{  a_url }}"></a></p>
  </iframe>
</center>
</main>
</div>		
</body>
</html>
    """)
    
    with open(page_name, 'w') as f:
        f.write(template.render(a_url = a_url, gpx_url=url, desc="DOWNLOAD"))


# all routes on one page 
import gpxpy
from pathlib import Path


def compress(gpxfile, min_dist_m = 60):
    gpx_file = open(gpxfile, 'r')
    gpx = gpxpy.parse(gpx_file)
    
    gpx.remove_elevation()
    gpx.remove_time()
    gpx.reduce_points(min_distance= min_dist_m) # reduce points 


    gpx_name = (os.path.basename(gpxfile)) 
    outfile = 'gpxs_subsampled/'+ gpx_name

    if not os.path.isfile(outfile):
        with open(outfile, 'w') as f:
            f.write(gpx.to_xml())

        
def url_builder(gpx_numbers):
    
    #url_start='https://gpx.studio/app?files=%5B%22https%3A%2F%2Frdspt.com%2Finlawsgravel%2Fgpxs%2F%s.gpx'%gpx_numbers[0]
    url_start='https://gpx.studio/app?files='+ urllib.parse.quote("""["https://rdspt.com/inlawsgravel/gpxs_subsampled/%s.gpx"""%gpx_numbers[0])
    url= url_start
    for g in gpx_numbers[1:]:
        #url = url + "%22%2C%22%20https%3A%2F%2Frdspt.com%2Finlawsgravel%2Fgpxs%2F%s.gpx"%g
        url = url + urllib.parse.quote(""""," https://rdspt.com/inlawsgravel/gpxs_subsampled/%s.gpx"""%g)
        
    url_end ="%22%5D#10.31/50.7281/7.1587"
    
    url = url + url_end
    return url

def generate_url_for_all_routes():
    gpxs = glob.glob('./gpxs/*.gpx')
    for g in gpxs:
        compress(g)
    gpx_numbers=[ Path(x).stem for x in sorted(glob.glob('./gpxs_subsampled/*.gpx'))]
    u = url_builder(gpx_numbers)

    return u 

def make_page_with_all_routes():

    u = generate_url_for_all_routes()

    with open('template_all.html') as f:
        template = Template(f.read())
    with open('all.html', 'w') as f:
        f.write(template.render(url = u ))

    print('Page with all routes written!')
