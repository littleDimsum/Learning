import turtle

wn = turtle.Screen()

spider = turtle.Turtle()
spider.shape('triangle')

legs = int(input("How many legs does a spider have?"))
angle = 360/legs

for i in range(legs):
    # draw the leg
    spider.right(angle)
    spider.forward(65)
    spider.stamp()

    # go back to the middle and turn back around
    spider.right(180)
    spider.forward(65)
    spider.right(180)

spider.shape("circle")

wn.exitonclick()
