import turtle

def draw_square(some_turtle):
    """directions for a square"""
    for i in range(4):
        some_turtle.forward(100)
        some_turtle.right(90)
    


def draw_pic():
    wd = turtle.Screen()
    wd.bgcolor("red")
    #make turtle draw a square
    brad = turtle.Turtle()
    brad.shape("turtle")
    brad.color("yellow")
    brad.speed(5)
    for i in range(26):
        draw_square(brad)
        brad.right(15)
    #make turtle draw a circle
    #cir = turtle.Turtle()
    #cir.shape("arrow")
    #cir.color("blue")
    #cir.circle(100)

    wd.exitonclick()

draw_pic()
