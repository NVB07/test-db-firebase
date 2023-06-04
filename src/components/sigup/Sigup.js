"use client";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Thực hiện các hành động sau khi đăng ký thành công, ví dụ: chuyển hướng, hiển thị thông báo thành công, vv.
            console.log("Đăng ký thành công", userCredential);
        } catch (error) {
            // Xử lý lỗi đăng ký, ví dụ: hiển thị thông báo lỗi, đặt state lỗi, vv.
            console.error("Lỗi đăng ký", error);
            setErrorMessage(error.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            // Thực hiện các hành động sau khi đăng ký bằng Google thành công, ví dụ: chuyển hướng, hiển thị thông báo thành công, vv.
            console.log("Đăng ký bằng Google thành công", userCredential);
        } catch (error) {
            // Xử lý lỗi đăng ký bằng Google, ví dụ: hiển thị thông báo lỗi, đặt state lỗi, vv.
            console.error("Lỗi đăng ký bằng Google", error);
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Đăng ký</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Đăng ký</button>
            </form>
            <button onClick={handleGoogleSignup}>Đăng ký bằng Google</button>
        </div>
    );
};

export default SignupComponent;
