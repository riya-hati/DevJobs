import React from 'react'
const Joblist = () => {
    return <section className="job__list">
        <div className="container">
            <div className="job__list__wrapper">
                <div className="search__panel">
                    <div className="search__panel__01">
                        <input type="text" placeholder="Search by title, companies" />
                    </div>
                    <div className="search__panel__01">
                        <input type="text" placeholder="Search by location" />
                        <button>Search</button>
                    </div>
                </div>
            </div>
            </div>
    </section>
};
export default Joblist;