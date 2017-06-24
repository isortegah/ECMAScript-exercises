var d = new Promise( ( resolve , reject) => {
    if ( false )
        resolve('Hola mundo')
    else
        reject('no bueno')
})

d.then( ( data ) => console.log('success : ' , data ));

d.catch( ( error ) => console.error('error : ' , error));


var d2 = new Promise( ( resolve , reject) => {
    setTimeout( () => {
        if ( true )
            resolve('Hola mundo')
        else
            reject('no bueno')
    }, 2000)
    
})

d2.then( ( data ) => console.log('success : ' , data ));

d2.catch( ( error ) => console.error('error : ' , error));


var d3 = new Promise( ( resolve , reject) => {
    setTimeout( () => {
        if ( true )
            resolve('Hola mundo')
        else
            reject('no bueno')
    }, 2000)
    
})

d3.then( ( data ) => {
    console.log('success : ' , data )
    return 'foo bar'
    })
    .then( ( data ) => {
        throw new Error('Error enviado')
        console.log('success : ' , data )
    })
    .catch( ( error ) => console.error('error : ' , error));