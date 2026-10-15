import gpxpy
import gpxpy.gpx
import copy
import os
import sys


in_file = sys.argv[1]
gpx_file = open(in_file, 'r')

gpx = gpxpy.parse(gpx_file)
gpx.remove_elevation()

outfile = os.path.splitext(in_file)[0]+"_NO_Elevation.gpx"
print(outfile)
with open(outfile, 'w') as f:
    f.write(gpx.to_xml())
