import './Prelimexam.css'

function Prelim(){
    return(
    <div>
        <h2>Things to Bring</h2>
        <h3 className="OnHand" >My Strawhat</h3>
        <h3 className="OnHand">Gum gum fruit</h3>
        <h3 className="NotOnHand">The Red Vest</h3>
    </div>
    );
}

function NotonHand(props){
    const isOnHand = props.isOnHand;
    if(isOnHand){
        return(
            <Prelim/>
        );
    }
    return(
    <div>
        <h2>Things to Bring</h2>
        <h3>My Strawhat</h3>
        <h3>Gum gum fruit</h3>
        <h3>The Red Vest</h3>
    </div>
    );
}

export default function App() {
    return(
        <div>
            <NotonHand
                isOnHand={true}
            />
        </div>
    )
}
