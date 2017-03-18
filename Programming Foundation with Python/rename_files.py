
import os

def rename_files():
    #(1) get file names from a folder in a list
    file_list = os.listdir(r"C:\Users\Sima\Desktop\Python programming\Programming Foundation with Python\prank\prank")
    print(file_list)
    cwd = os.getcwd()
    print("Current Working Directory is " + cwd)
    os.chdir(r"C:\Users\Sima\Desktop\Python programming\Programming Foundation with Python\prank\prank")
    #(2) for each file name, rename file   
    for file_name in file_list:
        trans = file_name.maketrans('', '', '0123456789')
        print("Old Name is " + file_name)
        print("New Name is " + file_name.translate(trans))
        os.rename(file_name, file_name.translate(trans))
    os.chdir(cwd)
rename_files()
