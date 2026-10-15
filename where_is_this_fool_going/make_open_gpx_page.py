import glob as glob
from pathlib import Path
import urllib
from jinja2 import Template


import gpxpy
import os
def compress(gpxfile, min_dist_m = 60):
    gpx_file = open(gpxfile, 'r')
    gpx = gpxpy.parse(gpx_file)
    
    gpx.remove_elevation()
    gpx.remove_time()
    gpx.reduce_points(min_distance= min_dist_m) # reduce points 


    gpx_name = (os.path.basename(gpxfile)) 
    outfile = 'gpxs_subsampled/'+ gpx_name
    with open(outfile, 'w') as f:
        f.write(gpx.to_xml())
        
        
gpxs = glob.glob('./gpxs/*.gpx')

for g in gpxs:
    compress(g)
    
    
def url_builder(gpx_numbers):
    
    #url_start='https://gpx.studio/app?files=%5B%22https%3A%2F%2Frdspt.com%2Finlawsgravel%2Fgpxs%2F%s.gpx'%gpx_numbers[0]
    url_start='https://gpx.studio/app?files='+ urllib.parse.quote("""["https://rdspt.com/where_is_this_fool_going/gpxs_subsampled/%s.gpx"""%gpx_numbers[0])
    url= url_start
    for g in gpx_numbers[1:]:
        #url = url + "%22%2C%22%20https%3A%2F%2Frdspt.com%2Finlawsgravel%2Fgpxs%2F%s.gpx"%g
        url = url + urllib.parse.quote(""""," https://rdspt.com/where_is_this_fool_going/gpxs_subsampled/%s.gpx"""%g)
        
    url_end ="%22%5D#10.31/50.7281/7.1587"
    
    url = url + url_end
    return url
