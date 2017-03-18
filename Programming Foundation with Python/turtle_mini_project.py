import turtle

def triangle(tur):
    for i in range(3):
        tur.forward(50)
        tur.left(120)

def tri_fractal():
    wn = turtle.Screen()
    wn.bgcolor("red")

    frac = turtle.Turtle()
    frac.shape("turtle")
    frac.color("green")
    
    frac.begin_fill()
    triangle(frac)
    frac.end_fill()

    wn.exitonclick()

tri_fractal()
    
