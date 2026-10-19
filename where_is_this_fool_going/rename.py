import os
path = 'gpxs'

num = 0
for filename in os.listdir(path):
    #prefix, num = filename[:-4].split('_')
    number = str(num).zfill(1)
    new_filename =  number + ".gpx"
    print(new_filename)
    os.rename(os.path.join(path, filename), os.path.join(path, new_filename))
    num = num +1
    
    

