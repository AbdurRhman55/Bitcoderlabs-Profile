import TrainingHero from '../components/Training/Hero';
import TrainingHighlights from '../components/Training/TrainingHighlights';
import Curriculum from '../components/Training/Curriculum';
import Certifications from '../components/Training/Certifications';
import Mentors from '../components/Training/Mentors';

const Training = () => {
    return (
        <div>
            <TrainingHero />
            <TrainingHighlights />
            <Curriculum />
            <Certifications />
            <Mentors />
        </div>
    );
};

export default Training;
