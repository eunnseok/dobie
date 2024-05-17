import React, { useState } from "react";
import Container from "../../components/common/Container";
import styles from "./LoginPage.module.css";
import mascot from "../../assets/mascot.png";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../stores/userStore";
import toast from "react-hot-toast";
import { login } from "../../api/Member";

export default function LoginPage() {
  const navigate = useNavigate();

  const { setUser } = useUserStore();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // 입력 값에 따라 formData 상태를 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // 현재 변경된 입력 필드를 기존 상태에 덮어쓰기
    }));
  };

  const handleSubmit = async (e) => {
    try {
      const response = await login(formData);
      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("tokenTimestamp", Date.now());
        await setUser({
          username: response.data.userDto.username,
          password: response.data.userDto.password,
        });
        navigate(`../main`);
        toast.success(`로그인 성공 !`, {
          position: "top-center",
        });
      } else {
        // 이메일, 비밀번호 불일치
        toast.error(`${response.message}`, {
          position: "top-center",
        });
      }
    } catch (error) {
      // 전송 오류 발생 시
      // 서버에러. 에러페이지로 이동
      console.error("로그인 에러:", error);
      toast.error(`로그인 실패 `, {
        position: "top-center",
      });
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.title}>
          <img src={mascot} alt="" decoding="async" />
          <div className={styles.dobie}>Dobie</div>
        </div>
        <input
          className={styles.loginInput}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          placeholder="username"
        />
        <input
          className={styles.loginInput}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          placeholder="password"
        ></input>
        <div className={styles.button} onClick={() => handleSubmit()}>
          <div className={styles.login}>로그인</div>
        </div>
      </div>
    </Container>
  );
}
