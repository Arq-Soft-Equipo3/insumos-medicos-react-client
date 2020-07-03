import React, { useState, useEffect } from 'react';
import { list } from '../services/applications';
import Navbar from "../components/Navbar";


const statuses = {
    pending: 'Pendiente',
    rejected: 'Rechazado',
    approved: 'Aprobado',
};

const Applications = () => {
    const [applications, setApplications] = useState(null);

    useEffect(() => {
      list()
        .then(res => { return res.json() })
        .then(data => { setApplications(data) });
    }, []);
    console.log(applications)
    return (
      <>
            <Navbar />
        <section className="hero">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h1 className="title">Mis solicitudes:</h1>
                    { applications ? (
                      <table className="table">
                      <thead>
                          <th>Insumo</th>
                          <th>Área</th>
                          <th>Estado</th>
                          <th></th>
                      </thead>
                      <tbody>
                          { applications.map(e => (
                              <tr>
                                  <td>{e.supply.S}</td>
                                  <td>{e.area.S}</td>
                                  <td>{statuses[(e.status.S).toLowerCase()]}</td>
                                  <td>
                                      <button className="button is-icon-button is-danger is-small" style={{borderRadius: '50%'}}>
                                          <span className="icon is-small">
                                              <i className="fas fa-times-circle"></i>
                                          </span>
                                      </button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                    </table>
                    ) : (
                      <p>Aún no cargaste solicitudes.</p>
                    )  }
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      </>
    );
}

export default Applications;
