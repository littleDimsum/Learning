import urllib.request

def read_text():
    """reads text in a file and returns a string joined by '-' instead of spaces.

    """
    quotes = open(r"C:\Users\Sima\Desktop\Python programming\Programming Foundation with Python\profanity editor\movie_quotes.txt")
    contents = quotes.read()
    #print(contents)
    quotes.close()
    query = '-'.join(contents.split())
    #print(query)
    check_profanity(query)


def check_profanity(text_to_check):
    """returns a statement depending if profanity word is found.

    """
    connection =  urllib.request.urlopen("http://www.wdylike.appspot.com/?q=" + text_to_check)
    output = connection.read()
    #print(output)
    connection.close()
    if b"true" in output:
        print("Please Don't Swear")
    elif b"false" in output:
        print("Proceed")
    else:
        print("Something Is Wrong")


read_text()
