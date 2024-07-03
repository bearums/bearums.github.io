import glob
import os
input_files = sorted(glob.glob('**photo**'))
for i in range(0, len(input_files)):
    print(i, input_files[i])
    os.rename(input_files[i], "_%s.jpg"%i)
