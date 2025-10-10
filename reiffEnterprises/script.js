const context = {
    rentals: [
        {
            outside: './northwest/out.jpg',
            inside:'./northwest/in.jpg',
            name:'Northwest Center',
            description:'It is in columbia city square and is good for people',
            link:'./northwest/northwest.html'
        },
        {
            outside: './oak/out.jpg',
            inside: './oak/in.jpg',
            name: 'Oak Center',
            description: 'It is along van buren and it is good for peopel',
            link: './oak/oak.html'
        },
        {
            outside: './connexion/out.jpg',
            inside: './connexion/in.jpg',
            name: 'Connexion Center',
            description: 'It is over there and it keeps flooding too',
            link: './connexion/connexion.html'
        },
        {
            outside: './larwill/out.jpg',
            inside: './larwill/in.jpg',
            name: 'Larwill',
            description: 'Real far away it is but it had meth guys in it too so yeah depends on what u wunt l',
            link: './larwill/larwill.html'
        },
        {
            outside: './farmbureau/out.jpg',
            inside: './farmbureau/in.jpg',
            name: 'Farm Bureau',
            description: 'It is the place that everyone goes to see farm bureau but i have to tell them they moves across streets',
            link: './farmbureau/farmbureau.html'
        }
    ]
        
};
//gets the javascript handlebar
const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;

//compiles the inner html 'cutting out' areas for the properties to be {{property}}
const template = Handlebars.compile(templateSource);

//this stores a use of the template with the argument context, assumably could be used with other objects
const compiledHtml = template(context);
const information = document.getElementById('information');
//all thats left is to replace the innertext of the element with the other text
information.innerHTML = compiledHtml;
