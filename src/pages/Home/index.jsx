import contents from '../../data/content';
import RootCard from '../../components/RootCard';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

export default function Home(){
    const rootCards = [];

    for (const content of contents) {
        rootCards.push(<RootCard key={content.title} content={content}/>)
    }

    
    return (
        <div>
            { rootCards }
            <p></p>
        </div>
    )
}