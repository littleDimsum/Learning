import turtle

wn = turtle.Screen()
wn.bgcolor("lightgreen")

spi = turtle.Turtle()
spi.color("blue")
spi.speed(10)

#def draw_spiral(some_turtle, distance):
    #for i in range(100):
        #some_turtle.right(90)
        #some_turtle.forward(distance)
        #distance += 5

def draw_crazy_spiral(some_turtle, distance):
    for i in range(100):
        some_turtle.right(89)
        some_turtle.forward(distance)
        distance += 5

draw_crazy_spiral(spi, 5)

wn.exitonclick()
