# App  carrito de compras

Este proyecyo es poc de un catálogo de series/películas usando la api de jikan.El objetivo técnico del la poc es crear un carrito que se sincronice con el servidor.

## Instalacion para correr el proyecto

Directorios del Proyecto:

### `git clone https://github.com/celestino1987/app-carrito.git`

 Clonar el proyecto (desde una ide,consola o donde desees) y luego hacer un npm install para tener las dependencias del proyecto en local.

### `npm run dev `
El proyecto se ejecutara en  http://localhost:3000/,
junto con el servidor.

 
## Construido con :
- React , Redux , redux-thunk 
- Javascript 
- css




## Algunas funcionalidades
![Inicio aplicacion](/src/img/portada.jpg)

codigo:
~~~ export const AppCard = ({ anime, random }) => {
  const history = useHistory();

  return (
    <>
      <div className="card">
        <div
          onClick={() =>
            history.push(`/details/${anime ? anime.mal_id : random.mal_id}`)
          }
        >
          <img
            src={anime ? anime?.image_url : random?.image_url}
            alt={"imagen de "}
          />
        </div>
        <h3>{anime ? anime.title : random.title}</h3>
      </div>
    </>
  );
}; 
~~~ 


![detalles del articulo](/src/img/detalles.jpg)
codigo:


~~~ 
 //Logica para añadir  al carrito

  const id = movie?.find((id) => id.mal_id === detail.mal_id);
  const detailsObject = {
    price: detail.score * 2,
    foto: detail?.image_url,
    mal_id: detail.mal_id,
    amount: amount,
  };

  const update = {
    ...detailsObject,
    amount: id?.amount + 1,
  };
  //funcion para añadir al carrito y si existe mandar solo  el put
  const addToCart = () => {
 
    setDisabledBtn(false);
    if (id?.mal_id === detailsObject.mal_id) {
      dispatch(axiosPutMovies(id.id, update));
    } else {
      dispatch(axiosPostMovies(detailsObject));
    }
    setTimeout(() => {
      setDisabledBtn(true);
    }, 2000);

~~~ 
![Carrito de compras](/src/img/carrito.jpg)

codigo:
~~~
 const handleDelete = (id) => {
    dispatch(openModal(false));
    serviceSwal(
      "question",
      "¿Desea eliminar el producto?",
      "",
      true,
      true,
      false
    ).then((res) => {
      if (res.isConfirmed) {
        dispatch(axiosDelMovies(id));
        try {
          movie.length - 1 < 1
            ? dispatch(openModal(false))
            : dispatch(openModal(true));
        } catch {
          serviceSwal("error", "", "Error", false, false, 1500);
        }
      } else {
        dispatch(openModal(true));
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(openLoading(true));
    }, 1000);

    dispatch(openLoading(false));
~~~


## Autores:
- Jesús Prada Celestino
