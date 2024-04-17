export async function loginUser(login, password) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Неверный логин или пароль")
  }

  const data = await response.json();
  return data;
}

export async function regUser(login, password, name) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
    }),
  });

  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже существует")
  }

  const data = await response.json();
  return data;
}

export async function getTasks(token) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже")
  }

  const data = await response.json();
  return data;
}
