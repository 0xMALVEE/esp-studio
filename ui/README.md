# Light studio

Sample client for light studio

## Invting someone to the workspace

When we are inviting someone into a team, we need to test if the follow supports these scenarios:

1- User has no account at all in our system. We send an email, or phone number to them, and expect them to signup
into the root system, and then when they've created account, we add them into the invited workspace

1.1 In some scenarios, we want to force the user to only have be able to join with very specific passport
1.1 User might get the invitation via phone, or mail or other means, but they might be able to signup
using their own interested email or phone number, in this case invitation is a code only, to join to a workspace,
for a user which does not exists.

2- User has an account in the system already.
2-1 Make sure the user can come to login screen, and when he does, he will see the invites to be accepted
2-1 If he is logged in, must see a notification, and we need to redirect him into invitations screen, and he can accept that invitation

https://stackoverflow.com/questions/36601367/json-field-set-to-null-vs-field-not-there

https://github.com/inconshreveable/mousetrap