import { create } from "zustand";
import { toast } from "react-toastify";
import { Users } from "../data/Users";

export const useStore = create((set, get) => ({
    // Form states
    email: "",
    password: "",
    name: "",
    phone: "",
    gender: "male",
    confirmPassword: "",

    // Data
    users: [],

    // Setters
    setField: (field, value) =>
        set((state) => ({
            ...state,
            [field]: value,
        })),

    // Ambil data dari LS
    initializeUsers: () => {
        const cek_users_LS = localStorage.getItem("users");
        if (!cek_users_LS) {
            localStorage.setItem("users", JSON.stringify(Users));
        }
        const usersParse = JSON.parse(localStorage.getItem("users") || "[]");
        set({ users: usersParse });
    },

    // Reset Form
    resetForm: () =>
        set({
            email: "",
            password: "",
            name: "",
            phone: "",
            gender: "male",
            confirmPassword: "",
        }),

    // Handle Login
    login: (navigate) => {
        const { users, email, password } = get();
        const resetForm = get().resetForm
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            localStorage.setItem("Login", true);
            localStorage.setItem("Lagi Login", JSON.stringify(user));
            toast.success("Login Success");
            resetForm();
            navigate("/");
        } else {
            toast.error("Login Gagal");
        }
    },

    register: (navigate) => {
        const { name, email, gender, phone, password, confirmPassword } = get();
        const resetForm = get().resetForm
        const role = "user";

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.find((user) => user.email === email)) {
            toast.warning("Email uda terdaftar");
            return;
        }
        if (password !== confirmPassword) {
            toast.warning("Password & Konfirm Password mesti sama");
            return;
        }

        const new_user = { name, email, gender, phone, password, role };
        users.push(new_user);
        localStorage.setItem("users", JSON.stringify(users));
        resetForm();
        navigate("/login");
    },
}));
