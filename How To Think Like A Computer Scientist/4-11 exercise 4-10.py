import turtle

wn = turtle.Screen()
wn.bgcolor("lightgreen")

tut = turtle.Turtle()
tut.color('blue')
tut.shape("turtle")
tut.penup()

for i in range(12):
    tut.forward(50)
    tut.pendown()
    tut.forward(10)
    tut.penup()
    tut.forward(25)
    tut.stamp()
    tut.forward(-85)
    tut.left(30)

wn.exitonclick()
