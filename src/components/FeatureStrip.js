import '../css/FeatureStrip.css';

function FeatureStrip(props) {
    return <div className='feature-strip'>
        <h1 className='feature-title'>{props.header}</h1>
        <div className='feature-content'>{props.children}</div>
    </div>
}

export default FeatureStrip;