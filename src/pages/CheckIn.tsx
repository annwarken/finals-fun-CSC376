import { useForm } from "react-hook-form";
import "../styles/Container.css";

interface FormValues {
    stress_level: number;
    confidence: string;
    study_spot: string;
    physical: string;
    mental: string;
    sleep: string
}

const CheckIn = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        alert("You're doing great! Keep working hard!");
        console.log(data);
    }

    return (
        <div className="container">
            <h1>Finals Week Check In</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>On a scale of 1-10, how stressed are you?<br/>(1 = very calm, 10 = very stressed)</label>
                <input {...register("stress_level", {
                        min: { value: 1, message: "Stress level must be at least 1" },
                        max: { value: 10, message: "Stress level must be at most 10" }
                    })}
                />
                {errors.stress_level && <p>{errors.stress_level.message}</p>}

                <label>Are you feeling confident about the remainder of your exams?</label>
                <input {...register("confidence")}/>

                <label>Where is your favorite spot to study?</label>
                <input {...register("study_spot")}/>

                <label>How are you doing physically?</label>
                <input {...register("physical")}/>

                <label>How are you doing mentally?</label>
                <input {...register("mental")}/>

                <label>Are you getting enough sleep?</label>
                <input {...register("sleep")}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CheckIn;