export default function Login() {

    return (
        <>
            <div className="container border border-success rounded text-center p-4" style={{maxWidth:"50%"}}>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Guild Name</span>
                    <input type="text" class="form-control"/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Authentication Seal</span>
                    <input type="text" class="form-control"/>
                </div>
                <button className="btn btn-dark mt-3">Login</button>
            </div>
        </>
    )
}