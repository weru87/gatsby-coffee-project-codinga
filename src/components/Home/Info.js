import React from 'react'
import { Link } from '@reach/router'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sed, eius sit rerum quod consequatur ab accusantium recusandae reprehenderit consequuntur mollitia officia incidunt, modi magnam, nisi voluptas esse. Repellat enim numquam minima harum, aliquam iure tempora, porro iste facilis debitis quisquam impedit odio earum quis exercitationem, fuga libero error reprehenderit.
                        </p>
                        <Link to="/about"><button className="btn text-uppercase btn-yellow">about</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
