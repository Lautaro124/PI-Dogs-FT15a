import React from 'react'

export default function search(){
    return (
        <div>
            <form className="search">
                <input type="text" className="form-control" placeholde="Search..."/>
                <input type= "submit" className="submit">Search</input>
            </form>
        </div>
    )
}