
import pandas as pd
import numpy as np
from jinja2 import Template
import os, glob


def download_tour(komoot_url, authenticator, connector):
    """downloads gpx file from komoot"""
    tour_id = komoot_url.split('/tour/')[1].split('?ref')[0]
    tour = connector.get_tour_by_id(tour_identifier=tour_id)
    tour.generate_gpx_track(authenticator)
    return tour
    

def add_komoot_url_to_collection(komoot_url,authenticator, connector):
    """downlaods gpx file and adds line in gpxs/info.csv with gpx information"""
    tour = download_tour(komoot_url,authenticator,connector)

    # find name of new gpx
    gpxs = sorted(glob.glob('gpxs/*.gpx'))
    last_int = int(os.path.splitext(os.path.basename(gpxs[-1]))[0])
    i = last_int + 1
    
    d=({'i':str(i).zfill(3), 
       'name': tour.name.replace(" ", "").replace(".", "_"),
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