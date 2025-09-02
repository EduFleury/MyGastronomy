import styles from './page.module.css'
import { useEffect } from "react"
import plateService from "../../service/plates.jsx"

export default function Plates(){

    const { getPlates, plateLoading, refectPlates, platesList } = plateService()
    const authData = JSON.parse(localStorage.getItem('auth'))

    useEffect(() =>{
        if(!authData){
             navigate('/auth')
        }
    }, [authData])

    useEffect(() => {
        if (refectPlates) {
          getPlates()
        }
    }, [refectPlates])

    if (plateLoading) {
        return <p>Loading plates...</p>
    }

    return (
            <div className={styles.platesTableWrapper}>
              {platesList.length > 0 ? (
                <table className={styles.platesTable}>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Available</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platesList.map((plate) => (
                      <tr key={plate._id}>
                        <td>
                          <img
                            src={plate.imgUrl}
                            alt={plate.name}
                            className={styles.plateImage}
                          />
                        </td>
                        <td>{plate.name}</td>
                        <td>${plate.price.toFixed(2)}</td>
                        <td>{plate.category}</td>
                        <td>
                          <span
                            className={`${styles.status} ${
                              plate.available ? styles.available : styles.unavailable
                            }`}
                          >
                            {plate.available ? "Available" : "Unavailable"}
                          </span>
                        </td>
                        <td className={styles.description}>
                          {plate.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className={styles.noPlates}>No plates found.</p>
              )}
            </div>
    )
}