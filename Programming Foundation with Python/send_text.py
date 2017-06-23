from twilio.rest import TwilioRestClient

account_sid = "YOUR-ACCOUNT-SID" # Your Account SID from www.twilio.com/console
auth_token  = "YOUR-AUTH-TOKEN"  # Your Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="Good Morning Mr. Awesome!",
    to="+PHONE-TO-SEND-TO",    # Replace with your phone number
    from_="TWILIO") # Replace with your Twilio number

print(message.sid)
