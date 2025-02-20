import { useNavigate } from "react-router-dom";
import { loginData } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
    const queryClient = useQueryClient()

    const navigate = useNavigate()
    const { mutate: login, isLoading: isLogin } = useMutation({
        mutationFn: ({email, password}) => loginData({email, password}),
        onSuccess: (data) => {
            navigate("/");
            queryClient.invalidateQueries({ queryKey: ['user'] }); // Arahkan ke halaman order dengan ID
        },
        onError: (error) => {
            console.error('Gagal menambahkan data:', error.message);
            alert("password/email salah!")
        },
    });

    return { login, isLogin };
}