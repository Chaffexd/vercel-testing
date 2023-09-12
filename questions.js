export const takehomeQuestions = [
    {
        id: 'q1',
        title: 'Question 1',
        question: 'What do you want to learn or do more of at work?',
        answer: "Learning from and at work are things that go hand in hand for me. That's another reason why I love support. Working in support, you're consistently challenged with facing new issues every single ticket, some are simple by nature, some leave you scratching your head. Right now my drive is currently learning as much as possible in the Front End world and the list goes on, here are some things that are on that list for me:",
        list: [
            { id: 'p1', point: "Next JS ('Not trying to be cheesey, but I'm still learning something new when using the tool')" },
            { id: 'p2', point: "Obtain AWS Certificates and gain more knowledge in cloud computing" },
            { id: 'p3', point: "Learn Chinese - I'm currently attending classes for this on the weekend" },
            { id: 'p4', point: "Read more books in general, currently reading 'We need to talk about inflation'" },
            { id: 'p5', point: "Continue taking steps into a Senior position and eventually into Management" },
            { id: 'p6', point: "Be the best version of myself and help where I can"}
        ]
    },
    {
        id: 'q2',
        title: 'Question 2',
        question: 'Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?',
        answer: "I'll use a recent example of where with Contentful, you can use the CLI to migrate content, this means you can create your content in the command line as well as set up the content model (the rules for a piece of content). This particular use case was about regex and adding certain validation to a field, the validation was to allow URLs to be posted into the text box. The customer had a solution that failed our strict regex rules. While researching the issue I discovered a lot more about regex and learnt that (?! is a potential attach vendor. These 3 characters threw the customers solution out the window. I then created another solution that fit the customer requirements and was safe to use in Contentful. I know it was successful because the customer confirmed it and I could also get the desired behaviour on my end. Not all problems are so straight forward though, the do require grit, research and testing."
    },
    {
        id: 'q3',
        title: 'Question 3',
        question: 'How would you compare Next.js with another frontend framework? Feel free to compare with a framework of your choice.',
        answer: "Next.js differs from other frontend frameworks"
    },
    {
        id: 'q4',
        title: 'Question 4',
        question: 'When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?'
    },
    {
        id: 'q5',
        title: 'Question 5',
        question: "Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you go about troubleshooting this and what questions would you ask the customer to understand the situation better?",
        answer: "Naturally when customers raise issues with us, it's super important you firstly understand the issue and have the right information to hand so you can troubleshoot the issue. I use an approach called the 3 A's, ACKNOWLEDGE, ALIGN, ASSURE. This allows me to be on the customers side. I first recognise the issue, align with the customer and assure them that we're working on it. I would want to know as much information as possible without seeming like I'm a robot so I would try to include my character in my response but ultimately I want to know, language? framework? when does it happen? what logs do you have/can you share them? how can I recreate this issue? just to be some of them. Asking these allows me to properly understand the issue and get to the root of the problem fast and in as little responses as possible, nobody enjoys a loooong ticket thread. "
    },
    {
        id: 'q6',
        title: 'Question 6',
        question: 'The customer from question 5 replies to your response with the below:',
    }
]