import turtle

def drawSprite(some_turtle, n_legs, l_legs):
    for l in range(n_legs):
        some_turtle.forward(l_legs)
        some_turtle.stamp()
        some_turtle.backward(l_legs)
        some_turtle.right(360/n_legs)

wn = turtle.Screen()
wn.bgcolor("green")

tur = turtle.Turtle()
tur.shape("triangle")
tur.color("blue")
tur.speed(10)

def sprite_length_legs(some_turtle, square_length, sprite_legs, sprite_length_legs):
    for i in range(4):
        some_turtle.forward(square_length)
        drawSprite(some_turtle, sprite_legs, sprite_length_legs)
        some_turtle.left(90)

sprite_length_legs(tur, 125, 10, 30)

wn.exitonclick()
