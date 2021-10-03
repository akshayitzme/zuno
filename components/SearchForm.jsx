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
                router.push(`/profile/${username}`)
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input name="username" onChange={formik.handleChange} value={formik.values.username} className="h-12 p-2 text-black" type="search" placehoder="github username" />
            <button className="bg-white" type="submit">Submit</button>
        </form>
    )
}

export default SearchForm
