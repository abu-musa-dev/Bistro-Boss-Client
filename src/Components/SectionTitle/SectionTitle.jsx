

const SectionTitle = ({heading, sunheading}) => {
    return (
        <div className="w-3/12 mx-auto">
            <p className="text-yellow-600 text-center my-8 mb-4">---{sunheading}---</p>
            <h3 className="text-4xl text-center  uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;