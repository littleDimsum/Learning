import webbrowser
import time

print("This program started on" + ' ' + time.ctime())

for rest in range(3):
    time.sleep(5)
    webbrowser.open_new("https://www.youtube.com/watch?v=dkBLoeWDmE0")
