const questions = [
    {
        id: 1,
        question: "I usually dispense food on my plate",
        answers: [
            { text: "by taking at least half of the vegetables and half of the main course, i.e. according to the plate model.", points: 4},
            { text: "by first taking the main course on the plate and also the salad if there is room on the plate.", points: 2},
            { text: "by taking only the main course on a plate. Vegetables are often forgotten.", points: 0}
        ]
    },
    {
        id: 2,
        question: "I usually eat vegetables",
        answers: [
            { text: "at least 5 doses per day.", points: 4},
            { text: "2-4 doses per day.", points: 2},
            { text: "one dose per day or less.", points: 0}
        ]
    },
    {
        id: 3,
        question: "I usually use for cooking or I eat foods that are prepared using",
        answers: [
            { text: "vegetable oil or running margarine (e.g. rapeseed oil or olive oil).", points: 3},
            { text: "box margarine.", points: 2},
            { text: "baking margarine.", points: 0},
            { text: "butter, coconut oil / fat or butter-vegetable oil mixture.", points: 0},
            { text: "i don't usually use fat in cooking.", points: 0}
        ]
    },
    {
        id: 4,
        question: "I usually apply to bread",
        answers: [
            { text: "butter, butter-vegetable oil mixture or cream cheese (e.g. Oivarine, Ingmarine, Creme Bonjour).", points: 0},
            { text: "vegetable oil (eg rapeseed oil, olive oil)", points: 3},
            { text: "margarine (at least 60% fat), nut or seed spread (e.g. Becel, Fairy, Flora, Tahini, peanut butter).", points: 3},
            { text: "light plant-based fat spread (e.g. Light Becel, Becel pro.activ, Benecol, Alpro Soya spread).", points: 2},
            { text: "a light butter-vegetable oil mixture (e.g. KevytLevi).", points: 1},
            { text: "no butter nor oil.", points: 0}
        ]
    },
    {
        id: 5,
        question: "I usually eat seeds and / or nuts",
        answers: [
            { text: "every day.", points: 2},
            { text: "most days of the week.", points: 1},
            { text: "a few days a week.", points: 0},
            { text: "less often than weekly or never.", points: 0}
        ]
    },
    {
        id: 6,
        question: "I eat fish as a main course",
        answers: [
            { text: "at least 2 times a week or more often.", points: 2},
            { text: "once a week.", points: 1},
            { text: "less than once a week or never.", points: 0}
        ]
    },
    {
        id: 7,
        question: "I choose dishes with red meat (beef, pork, lamb) as the main dish",
        answers: [
            { text: "5 times a week or more.", points: 0},
            { text: "3-4 times a week.", points: 1},
            { text: "1-2 times a week.", points: 2},
            { text: "less often or not at all.", points: 2}
        ]
    },
    {
        id: 8,
        question: "I choose whole grain cereal products",
        answers: [
            { text: "mostly.", points: 3},
            { text: "quite often.", points: 2},
            { text: "occasionally or never.", points: 0}
        ]
    },
    {
        id: 9,
        question: "The dairy products I have chosen are",
        answers: [
            { text: "mostly fatty, more than 2% fat (e.g. Turkish and Bulgarian yogurt, whole milk).", points: 0},
            { text: "mostly low-fat, 1-2% fat (e.g., first and skim milk, yogurt, first file).", points: 2},
            { text: "mostly skimmed (e.g. skim milk or yogurt).", points: 3},
            { text: "I do not use dairy products or choose plant-based products (e.g. soy and oat drinks and yoghurts).", points: 3}
        ]
    },
    {
        id: 10,
        question: "I use it daily on bread, in cooking or as such",
        answers: [
            { text: "fatty cheese, more than 17% fat (eg cream cheese, processed cheese, feta or coconut oil-based cheeses).", points: 0},
            { text: "light cheese or light processed or fresh cheese, fat up to 17% (eg Oltermanni 17%, Edam 17%).", points: 1},
            { text: "vegetable fat cheese (Julia 10% or 17%, Julius 25%).", points: 2},
            { text: "i don't use cheese.", points: 2}
        ]
    },
    {
        id: 11,
        question: "I use sugar sweetened drinks",
        answers: [
            { text: "several glasses a day.", points: 0},
            { text: "up to a glass per day.", points: 1},
            { text: "less often than daily.", points: 2}
        ]
    },
    {
        id: 12,
        question: "I use products with added sugar",
        answers: [
            { text: "several times a day.", points: 0},
            { text: "about once a day.", points: 1},
            { text: "a few times a week or less.", points: 2}
        ]
    },
    {
        id: 13,
        question: "I pay attention to the amount of salt in food and strive to reduce the use of salt",
        answers: [
            { text: "usually.", points: 3},
            { text: "every now and then.", points: 2},
            { text: "I don’t pay attention to the amount of salt in the foods.", points: 0}
        ]
    },
    {
        id: 14,
        question: "I eat fast food",
        answers: [
            { text: "almost daily.", points: 0},
            { text: "a couple of times a week.", points: 1},
            { text: "less than once a week.", points: 2}
        ]
    }                   

]