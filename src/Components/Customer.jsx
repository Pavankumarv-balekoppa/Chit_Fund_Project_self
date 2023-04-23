import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

const Customer = () => {
    // const [numPages, setNumPages] = useState(null);
    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }
    // function downloadPDF() {
    //     saveAs(
    //         'D:/New folder/pavan/RESUME_J.pdf',
    //         'RESUME_J.pdf'
    //     );
    // }

    let cname = useRef('')
    let amount = useRef('')
    let reasion = useRef('')
    let branch = useRef('')
    let id = useRef(0)
    let [files, setfile] = useState([])
    let [ids, setids] = useState([])

    let pay = (e) => {
        e.preventDefault()
        let data = { C_name: cname.current.value, Amount: amount.current.value, Reasion: reasion.current.value, Branch: branch.current.value, id: id.current.value }
        let fecthing = async () => {
            let res = await fetch(`http://localhost:7000/Pay/${id.current.value}`)
            let data = await res.json()
            setids(data)
        }
        fecthing()
        console.log(ids.id);
        if (ids.id == id.current.value) {
            alert('id is alerdy present')
            View()
        }
        else {
            fetch('http://localhost:7000/Pay', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            }).then(() => {
                alert("successfull");
                View()
                cname.current.value=''
                amount.current.value=''
                reasion.current.value=''
                id.current.value=''
                branch.current.value=''
                
            })
        }
    }


    let View = async () => {
        let fecthing = async () => {
            let res = await fetch(`http://localhost:7000/Pay/${id.current.value}`)
            let data = await res.json()
            setfile(data)
            id.current.value=''
        }
        fecthing()
    }


    const generatePdf = () => {
        // Get the HTML content of the div element
        const element = document.getElementById('pdf');
        const htmlContent = element.innerHTML;
        console.log(htmlContent);

        // Create a new jsPDF instance
        const doc = new jsPDF();

        // //to custom the pdf size
        // const doc = new jsPDF({
        //     orientation: 'portrait',
        //     unit: 'in',
        //     format: [8.5, 11],
        // });
        // // Set the font size to 10 points
        // doc.setFontSize(10);


        // Add the HTML content to the PDF document
        doc.html(htmlContent,
            {
                callback: function () {
                    doc.save('my-bill.pdf');
                }
            }
        );

        //   //for single line text
        //     doc.text('My PDF Content', 10, 10);
        //     doc.save('My_Bill.pdf');
    };


    const handleClick = () => {
        generatePdf();
    };


    return (
        <div className="customer m-5">
            <div className="one d-flex justify-content-around">
                <div className="content pt-5">
                    <form onSubmit={pay}>
                        <div className="name m-3">
                            <label>C_Name :</label><input className="ms-1" ref={cname} type="text" required />
                        </div>
                        <div className="amount m-3">
                            <label>Amount :</label> <input className="ms-1" ref={amount} type="number" required />
                        </div>
                        <div className="resion m-3">
                            <label>Reasion :</label><input className="ms-2" ref={reasion} type="text" required />
                        </div>
                        <div className="id m-3">
                            <label>Unic id :</label><input className="ms-3" ref={id} type="text" required />
                        </div>
                        <div className="branch m-3">
                            <label>Branch :</label><select className="ms-4" ref={branch} name="branch" id="">
                                <option> Select District</option>
                                <option value="Bagalkot">Bagalkot </option>
                                <option value="Ballari">Ballari </option>
                                <option value="Bangalore Rural">Bangalore Rural </option>
                                <option value="Belagavi">Belagavi </option>
                                <option value="Bengaluru">Bengaluru </option>
                                <option value="Bidar">Bidar </option>
                                <option value="Chamarajanagar">Chamarajanagar</option>
                                <option value="Chikballapur">Chikballapur</option>
                                <option value="Chikkamagaluru">Chikkamagaluru</option>
                                <option value="Chitradurga">Chitradurga</option>
                                <option value="Dakshina Kannada">Dakshina Kannada</option>
                                <option value="Davanagere">Davanagere</option>
                                <option value="Dharwad">Dharwad</option>
                                <option value="Gadaga">Gadaga</option>
                                <option value="Hasana">Hasana</option>
                                <option value="Haveri">Haveri</option>
                                <option value="Kalaburgi">Kalaburgi</option>
                                <option value="Kodagu">Kodagu</option>
                                <option value="Kolar">Kolar</option>
                                <option value="Koppala">Koppala</option>
                                <option value="Mandya">Mandya</option>
                                <option value="Mysore">Mysore</option>
                                <option value="Raichur">Raichur</option>
                                <option value="Ramanagara">Ramanagara</option>
                                <option value="Shivamogga">Shivamogga</option>
                                <option value="Tumakur">Tumakur</option>
                                <option value="Udupi">Udupi</option>
                                <option value="Uttara Kannada">Uttara Kannada</option>
                                <option value="Vijayapura">Vijayapura</option>
                                <option value="Yadgiri">Yadgiri</option>
                            </select>
                        </div>
                        <div className="button m-5 ">
                            <button className="btn btn bg-success ps-3 pe-3 ms-5">Pay</button>
                        </div>
                    </form>
                </div>

                <div className="pdf ">
                    <div id='pdf' className="file border bg-light p-3 text-dark text-start">
                        <h1 className=' bg-warning p-3 ps-5 mb-4'>PDF File</h1>
                        <h3>Customer Name : {files.C_name}</h3>
                        <h3>Amount : {files.Amount}</h3>
                        <h3>Reasion : {files.Reasion}</h3>
                        <h3>Branch : {files.Branch}</h3>
                        <h3>Unicid : {files.id}</h3>
                    </div>
                    <button className="btn btn bg-success ps-3 pe-3 ms-3 mt-3" onClick={View}>View</button>
                    <button className="btn btn bg-success ps-3 pe-3 ms-5 mt-3" onClick={handleClick}>Download</button>
                </div>
            </div>
            <div className="two d-flex justify-content-center mt-5">
                <Link to="/customer/viewbill" className="btn btn bg-danger ps-3 pe-3 ">View All Bill</Link>
            </div>
        </div>
    );
}

export default Customer;