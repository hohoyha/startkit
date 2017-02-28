exports.getData = function getData() {
    return {
        locations: [
            {
                name:'Portlane',
            },
            {
                name:'Bend',
            }
        ]
    };
}

exports.getTour = function getTour() {
    return
        { 
            pageTestScript: '/qa/tests-about.js'
            /*
            currency: { name: 'My Used', abbrev: 'USD'}, 
            tours:[ {name:'설악산', price:'200'}, 
            {name:'경주', price:'200'}],
            test: ['kr', 'co'],
            */
        };    
}