import React from 'react'

function Search(props) {
    return (
        <>
            <h6>{props.title}</h6>
            <div className = "card-header"> {props.title2} </div>

            <div className = "card">
            <div className = "card-body">
            <form id="boton">
                <div className = "row">
                    <div className = "col">
                        <label>Palabra de busqueda</label>
                        <input type="codigoproducto" className = "form-control" placeholder="000-000"></input>
                    </div>
                    <div className = "col">
                    <div className = "form">
                        <div className = "col">
                            <label>Busqueda por</label>
                                <select className = "custom-select" id="inlineFormCustomSelect">
                                    <option selected>{props.busqueda1}</option>
                                    <option>{props.busqueda2}</option>
                                </select>

                                <div className = "col-8" id = "elemento">
                                    <button className = "btn btn-primary small"> Buscar </button>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>          
            </form>     
            </div>
            </div>
        </>
    )
}

export default Search
