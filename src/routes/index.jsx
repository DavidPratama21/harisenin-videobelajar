import { createBrowserRouter, Navigate } from "react-router";
import Beranda from "../pages/Beranda";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Kategori from "../pages/Kategori";
import DetailProduk from "../pages/DetailProduk";
import Metode from "../pages/Metode";
import Bayar from "../pages/Bayar";
import UbahMetodePembayaran from "../pages/UbahMetodePembayaran";
import Selesai from "../pages/Selesai";
import Pesanan from "../pages/Pesanan";
import Kelas from "../pages/Kelas";
import Profil from "../pages/Profil";
import Video from "../pages/pembelajaran/Video";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin";
import PublicRoute from "./PublicRoute";
import Aturan from "../pages/Aturan";
import Quiz from "../pages/pembelajaran/Quiz";
import Congrats from "../pages/pembelajaran/Congrats";
import Sertifikat from "../pages/pembelajaran/Sertifikat";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: "/register",
        element: (
            <PublicRoute>
                <Register />
            </PublicRoute>
        ),
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Beranda />
            </ProtectedRoute>
        ),
    },
    {
        path: "/kategori",
        element: (
            <ProtectedRoute>
                <Kategori />
            </ProtectedRoute>
        ),
    },
    {
        path: "/detailProduk",
        element: (
            <ProtectedRoute>
                <DetailProduk />
            </ProtectedRoute>
        ),
    },
    {
        path: "/metode",
        element: (
            <ProtectedRoute>
                <Metode />
            </ProtectedRoute>
        ),
    },
    {
        path: "/bayar",
        element: (
            <ProtectedRoute>
                <Bayar />
            </ProtectedRoute>
        ),
    },
    {
        path: "/ubahMetode",
        element: (
            <ProtectedRoute>
                <UbahMetodePembayaran />
            </ProtectedRoute>
        ),
    },
    {
        path: "/selesai",
        element: (
            <ProtectedRoute>
                <Selesai />
            </ProtectedRoute>
        ),
    },
    {
        path: "/pesanan",
        element: (
            <ProtectedRoute>
                <Pesanan />
            </ProtectedRoute>
        ),
    },
    {
        path: "/kelas",
        element: (
            <ProtectedRoute>
                <Kelas />
            </ProtectedRoute>
        ),
    },
    {
        path: "/profil",
        element: (
            <ProtectedRoute>
                <Profil />
            </ProtectedRoute>
        ),
    },
    {
        path: "/video",
        element: (
            <ProtectedRoute>
                <Video />
            </ProtectedRoute>
        ),
    },
    {
        path: "/aturan",
        element: (
            <ProtectedRoute>
                <Aturan />
            </ProtectedRoute>
        ),
    },
    {
        path: "/quiz",
        element: (
            <ProtectedRoute>
                <Quiz />
            </ProtectedRoute>
        ),
    },
    {
        path: "/congrats",
        element: (
            <ProtectedRoute>
                <Congrats />
            </ProtectedRoute>
        ),
    },
    {
        path: "/sertifikat",
        element: (
            <ProtectedRoute>
                <Sertifikat />
            </ProtectedRoute>
        ),
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <Admin />
            </ProtectedRoute>
        ),
    },
]);
