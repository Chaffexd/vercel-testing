export const takehomeQuestions = [
  {
    id: "q1",
    title: "Question 1",
    question: "What do you want to learn or do more of at work?",
    answer:
      "Learning from and at work are things that go hand in hand for me. That's another reason why I love support. Working in support, you're consistently challenged with facing new issues every single ticket, some are simple by nature, some leave you scratching your head for hours. Right now my drive is currently learning as much as possible in the Front End world and the list goes on for that, here are some things that are on that list for me right now and things I'm currently learning:",
    list: [
      {
        id: "p1",
        point:
          "Next JS ('Not trying to be cheesey, but I'm still learning something new when using the tool')",
      },
      {
        id: "p2",
        point:
          "Obtain AWS Certificates and gain more knowledge in cloud computing",
      },
      {
        id: "p3",
        point:
          "Learn Chinese - I'm currently attending classes for this on the weekend",
      },
      {
        id: "p4",
        point:
          "Read more books in general, currently reading 'We need to talk about inflation'",
      },
      {
        id: "p5",
        point:
          "Continue taking steps into a Senior position and eventually into Management",
      },
      { id: "p6", point: "Be the best version of myself and help where I can" },
    ],
  },
  {
    id: "q2",
    title: "Question 2",
    question:
      "Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?",
    answer:
      "I'll use a recent example of where with Contentful, you can use the CLI to migrate content, this means you can create your content in the command line as well as set up the content model (the rules for a piece of content). This particular use case was about regex and adding certain validation to a field, the validation was to allow URLs to be posted into the text box. The customer had a solution that failed our strict regex rules. While researching the issue I discovered a lot more about regex and learnt that (?! is a potential attach vendor. These 3 characters threw the customers solution out the window. I then created another solution that fit the customer requirements and was safe to use in Contentful. I know it was successful because the customer confirmed it and I could also get the desired behaviour on my end. Not all problems are so straight forward though, the do require grit, research and testing.",
  },
  {
    id: "q3",
    title: "Question 3",
    question:
      "How would you compare Next.js with another frontend framework? Feel free to compare with a framework of your choice.",
    answer: "Next.js differs from other frontend frameworks in the way it handles things like server side rendering and SEO, I'll compare with Svelte as it is also a popular framework and is listed on the help page with Vercel so I assume there are asks about it. I think the main difference is barrier to entry. Next requires good knowledge of React to work whereas Svelte is closer to writing HTML. Svelte is famous for small build packages which transforms components into plain JS at build time allowing for faster run times, Svelte also doesn't utilise a virtual DOM like React does. Next.js is famous for more sophisticated features like Server Side Rendering, there is also a larger ecosystem around React/Next due to it's use and demand and wide adoption.",
  },
  {
    id: "q4",
    title: "Question 4",
    question:
      "When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?",
    answer: "The answer here is it depends on your use case as they all serve slightly different purposes. Edge functions are great for running code at the edge of a network, closer to users when you need to interact with data as soon as possible in cases like webhook requests. Serverless functions are there for when you need more power, as demand increases they automatically scale to meet demand and are used for authentication, db queries, form submissions and so on, the tend to be more heavy in terms of usage. Lastly, Edge middleware is code that executes before a request is processed on a site. Based on the request, you can modify it's response. When a request is made to the server, middleware will intercept, and send back the correct page elements for where someone is located for example so a user can see content relavent to them."
  },
  {
    id: "q5",
    title: "Question 5",
    question:
      "Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you go about troubleshooting this and what questions would you ask the customer to understand the situation better?",
    answer:
      "Naturally when customers raise issues with us, it's super important you firstly understand the issue and have the right information to hand so you can troubleshoot the issue. I use an approach called the 3 A's, ACKNOWLEDGE, ALIGN, ASSURE. This allows me to be on the customers side. I first recognise the issue, align with the customer and assure them that we're working on it. I would want to know as much information as possible without seeming like I'm a robot so I would try to include my character in my response but ultimately I want to know, language? framework? when/how does it happen? what logs do you have/can you share them? how can I recreate this issue? just to be some of them. Asking these allows me to properly understand the issue and get to the root of the problem fast and in as little responses as possible, nobody enjoys a loooong ticket thread. ",
  },
  {
    id: "q6",
    title: "Question 6",
    question:
      "The customer from question 5 replies to your response with the below:",
    frustratedPoint:
      "“I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions.”",
    scenarios: [
      {
        id: 's1',
        scenario:
          "A customer has a project on Vercel and they want to redirect the /blog path to another website. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.",
        answer: "Dear { Customer }, thanks for reaching out! To achieve your desired outcome on Vercel, you could adjust your vercel.json file to handle this behaviour for you. This would allow you to override the default behaviour of Vercel from within your project. The vercel.json file would take an object with the key: 'redirects' that holds an array for a path, example: { 'source': '/blog', destination: 'https://hello.com/newblog', 'permanent': true }. If you have any questions on this or would like to share an example of your setup, please do so and I'll do my best to support you where I can. Please look at these options outlined in this article here for more information: ",
        article: "https://vercel.com/docs/projects/project-configuration#redirects-examples"
      },
      {
        id: 's2',
        scenario:
          "A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.",
        answer: "Dear { Customer }, thanks for reaching out! You would need to look at using 'x-robots-tag: noindex' header to prevent your website from being indexed, you can do this in the vercel.json file. Alternatively, you could also use <meta name='robots' content='noindex'> by placing this in the head section of your page. I would suggest choosing the method that is more convenient for your site and appropriate for the content type. Vercel already enables this automatically for preview deployments to prevent negative SEO impact from duplicate content being available. We have a guide and more information available on this here: ",
        article: "https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines"
      },
      {
        id: 's3',
        scenario:
          "What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?",
        answer: "Personally when using Vercel, I have encountered a lot of deployment errors for lots of different reasons like a url being misconfigured, or TypeError's when the project is being built. I have a feeling that DNS questions might be common as well as I have also experienced this when setting up domains. Any issue that is deemed common should have very detailed and extensive articles built around them so that tickets can be prevented and users can be empowered to resolve the issue by themselves. This is something I have always strived for at each organisation I have worked at and I pride myself on good documentation + contribution."
      },
      {
        id: 's4',
        scenario:
          "How could we improve or alter this familiarization exercise?",
        answer: "This exercise is a good test, it's quite loose in the fact a candidate has free roam on the approach of how they decide to build out the project for the questions. It covers most aspects of Vercel. You could make it more technical by including more specific challenges rather than handling just a page for each response, perhaps handling data or calling an API or such. Setting up the redirect like mentioned before. Have a candidate do more unique features specific to Vercel."
      },
    ],
  },
];
