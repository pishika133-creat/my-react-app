import React from 'react'

const Condition = () => {




function handleSubmit(e){
e.preventDefault();
 const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    alert("Form submit success");
    console.log("data", data);
}

    return (
        <div>
            <h2>Condition page</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <br /><br />
                <input type="text" name="name" id="name" placeholder='Enter Your name' />
                <br /><br />
                <label htmlFor="">Age</label>
                <br /><br />
                <input type="number" name="age" id="age"  />
                <br /><br />
                <button type='submit'> submit</button>
            </form>
        </div>
    )
}

export default Condition