import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import Profil_layout from "../layouts/Profil_layout";
import Menu_daftar from "../components/molecules/Menu_daftar";
import Button from "../components/atoms/Button";
import Divider from "../components/atoms/Divider";
import Input from "../components/atoms/Input";
import Avatar from "../assets/Avatar_tutor/2.png";
import { useStore } from "../store/UserStore";

const Profil = () => {
    const [displayName, setDisplayName] = useState("");
    const [displayEmail, setDisplayEmail] = useState("");
    const {
        name,
        email,
        phone,
        gender,
        password,
        confirmPassword,
        setField,
        updateProfile,
    } = useStore();

    useEffect(() => {
        const userLogin = JSON.parse(localStorage.getItem("user"));
        if (!userLogin?.id) return;

        const fetchUser = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/users/${userLogin.id}`
                );
                const response = await res.json();
                const user = response.data;
                setField("name", user.name);
                setField("email", user.email);
                setField("phone", user.phone);
                setField("gender", user.gender);
                setField("password", "");
                setField("confirmPassword", "");
            } catch (err) {
                toast.error("Gagal mengambil data user");
            }
        };
        setDisplayName(user.name);
        setDisplayEmail(user.email);

        fetchUser();
    }, [setField]);

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Profil_layout>
            {/* 3752 */}
            <div className="relative top-19.5 mb-16 grid py-7 px-5 gap-6 sm:flex sm:py-16 sm:px-30 sm:gap-9 sm:max-w-[1440px] sm:mx-auto">
                {/* 4801 */}
                <div className="grid gap-6 h-fit">
                    {/* 3692 */}
                    <div className="grid gap-2.5">
                        <h5 className="font-semibold text-xl leading-[120%] text-dark-primary">
                            Ubah Profil
                        </h5>
                        <p className="leading-[140%] tracking-[0.2px] text-dark-secondary">
                            Ubah data diri Anda
                        </p>
                    </div>
                    {/* 3880 */}
                    <Menu_daftar />
                </div>
                {/* 3879, Profile section */}
                <div className="grid gap-6 p-6 bg-other-primary rounded-[10px] border border-other-border justify-en">
                    {/* 4428 Picture, name, email, change photo btn*/}
                    <div className="flex gap-3.5 items-center sm:gap-4">
                        {/* Avatar */}
                        <img
                            src={Avatar}
                            alt="Avatar image"
                            className="w-15 rounded sm:w-23"
                        />
                        <div className="grid sm:gap-2">
                            <p className="font-semibold leading-[120%] text-dark-primary sm:text-xl">
                                {displayName}
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-primary sm:text-lg">
                                {displayEmail}
                            </p>
                            <button className="font-bold leading-[140%] tracking-[0.2px] text-tertiary w-fit">
                                Ganti Foto Profil
                            </button>
                        </div>
                    </div>
                    {/* Divider */}
                    <Divider />
                    {/* 4420 Biography Box */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            updateProfile(
                                user.id,
                                (updatedName, updatedEmail) => {
                                    setDisplayName(updatedName);
                                    setDisplayEmail(updatedEmail);
                                }
                            );
                        }}
                        className="grid gap-6"
                    >
                        {/* Form Bio */}
                        <div className="grid gap-4 sm:flex">
                            {/* 4429 Name & Email */}
                            <div className="grid gap-4 sm:flex">
                                <Input
                                    onChange={(e) =>
                                        setField("name", e.target.value)
                                    }
                                    type={"text"}
                                    value={name}
                                    id={`name`}
                                >
                                    Nama Lengkap
                                </Input>
                                <Input
                                    onChange={(e) =>
                                        setField("email", e.target.value)
                                    }
                                    type={"email"}
                                    value={email}
                                    id={`email`}
                                >
                                    E-Mail
                                </Input>
                            </div>
                            {/* 4430 Gender & Phone */}
                            <div className="grid gap-4">
                                {/* Gender */}
                                <div className="relative sm:hidden">
                                    <select
                                        value={gender}
                                        disabled
                                        className="peer h-[49px] border border-gray-300 rounded-[10px] px-3 focus:outline-none focus:border-primary w-full"
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <label
                                        htmlFor=""
                                        className="absolute left-3 -top-2 text-sm font-medium bg-white px-[5px] text-gray-500 transition-all peer-focus:text-primary"
                                    >
                                        Jenis Kelamin
                                    </label>
                                </div>
                                {/* Phone */}
                                {/* Kalo mau gabungan 62 nya bikin state baru lagi */}
                                <div className="relative flex gap-4">
                                    <select
                                        type=""
                                        id=""
                                        className="peer h-[49px] border border-gray-300 rounded-[10px] px-3 focus:outline-none focus:border-primary"
                                    >
                                        <option value="62">+62</option>
                                        <option value="61">+61</option>
                                    </select>
                                    <Input
                                        id="Phone"
                                        value={phone}
                                        onChange={(e) =>
                                            setField("phone", e.target.value)
                                        }
                                    >
                                        No. Hp
                                    </Input>
                                </div>
                            </div>
                            {/* 4431 PW & Confirm PW*/}
                            <div className="grid gap-4 sm:hidden">
                                <Input
                                    id="PW"
                                    onChange={(e) =>
                                        setField("password", e.target.value)
                                    }
                                    type={"password"}
                                    value={password}
                                >
                                    Password
                                </Input>
                                <Input
                                    id="PWConfirm"
                                    onChange={(e) =>
                                        setField(
                                            "confirmPassword",
                                            e.target.value
                                        )
                                    }
                                    type={"password"}
                                >
                                    Konfirmasi Password
                                </Input>
                            </div>
                        </div>
                        {/* Submit BTN */}
                        <div className="sm:h-11.5 sm:justify-self-end">
                            <Button type="submit">Simpan</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Profil_layout>
    );
};

export default Profil;
