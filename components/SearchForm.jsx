import { useRouter } from 'next/router'
import {useFormik} from 'formik'

function SearchForm() {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username: ''
        },
        onSubmit: ({username}) => {
            try {
                router.push(`/${username}/`)
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input name="username" onChange={formik.handleChange} value={formik.values.username} className="h-12 p-2 text-black rounded" type="search" placehoder="github username" />
            <button className="h-12 bg-2 p-2 rounded font-bold text-white" type="submit">🔍 Search</button> 
        </form>
    )
}

export default SearchForm
