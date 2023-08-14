let agregar;
let IDProd = 500;
let NomProd;
let CatProd;
let PrecioProd;

function AgregarMacetas(agregar){
    while(agregar==0){
        CatProd = prompt('Coloque la seccion perteneciente a la maceta? (Cemento, Plastico)')
        if(CatProd=='Cemento'||CatProd=='Plastico'){
            NomProd = prompt('Ingresar el nombre del producto')

            PrecioProd = Number(prompt('Ingresar el precio del producto'))
            agregar=3;
        }else{
            alert('La seccion que acaba de ingresar no existe. Elija una nuevamente.')
             }
   }
}

function AgregarPlantas(agregar){
    while(agregar==0){
    CatProd = prompt('Coloque la seccion perteneciente a la planta (General, Interior, Invierno)')
    if((CatProd=='General')||(CatProd=='Interior')||(CatProd=='Invierno')){
        NomProd = prompt('Ingresar el nombre del producto')
        PrecioProd = Number(prompt('Ingresar el precio del producto'))
        agregar=2;
    }else{
        alert('La seccion que acaba de ingresar no existe. Elija una nuevamente.')
         }
    }

}

function MostrarYVolverAgregar(agregar, NomProd, IDProd, CatProd, PrecioProd){
    if(agregar!=1){
        alert('Nombre del producto: '+NomProd+'\rID que se le atribuye al producto: '+IDProd+'\rSección: '+CatProd+'\rPrecio: $'+PrecioProd)
        return confirm('Desea seguir agregando productos?')

    }
}

do{
    alert('Programa control de Stock')

    let agregar = confirm('Desea cargar productos nuevos?')

    if(agregar==true){

        agregar=1;
        while(agregar==1){
            agregar=0;
            let categoria = prompt('Coloque la categoria del producto (Plantas, Macetas)')
            switch(categoria){
                case 'Plantas':
                    AgregarPlantas(agregar);
                break;
                case 'Macetas': 
                    AgregarMacetas(agregar);
                break;
                default:
                    alert('Categoria erronea vuelva a elegir')
                    agregar=1;
                break;
            }
            if(agregar!=1){
                agregar = MostrarYVolverAgregar(agregar, NomProd, IDProd, CatProd, PrecioProd);
                IDProd++;
            }
    
        }


    }
    }while(agregar==true)


