import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import PetEditForm from "./lab02.petEditForm.$petId";

export default function HerbDetail(){
    const myParams = useParams();
    const petId = myParams.petId;
    const [petData, setPetData] = useState({
        petId : '',
        petName : '',
        petBD : '',
        petType : '',
        petNote : '',
        petOwner : ''
    });

    useEffect(() => {
        try {
            const fetchPetData = async () => {
                const petData = await fetch(`http://localhost:5173/api/petDetail/${petId}`);
                if (petData.ok) {
                    const petJson = await petData.json();
                setPetData(petJson);
                    console.log(petJson);
                } else {
                    alert('[ERR] Failed to loaded data.');
                }
            }

            fetchPetData().catch(console.error);
        } catch (error) {
            alert('[ERR] An error occurred while loading the data.');
        }
    }, []);

    return (
    <div className="m-3">
        <a href='/lab02/petDetail'>[ ข้อมูลสัตว์เลี้ยง ]</a>
        <h1 className="font-bold">รายละเอียดสัตว์เลี้ยง</h1>
        {
            <div key={petId}>
                <div className="font-bold p-2 m-2 border-2 rounded-lg">
                    ชื่อสัตว์เลี้ยง: {petId}<br/>
                    รายละเอียด: {petId}<br/>
                    ประเภท: {petId}<br/>
                    วันเกิด: {petId}<br/>
                    เจ้าของ: {petId}<br/>
                </div>
            </div>
        }
        <a href='/lab02/petLists'>[ ย้อนกลับ ]</a>
    </div>
    );
}