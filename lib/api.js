const fetcher = async ({ url, method, body, json = true}) => {
    const res = await fetch(url, {
        method,
        // body: body && JSON.stringify(body),
        // use below if no body exists
        ...(body && { body: JSON.stringify(body)}),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        } 
    });

    if (!res.ok) {
        throw new Error("API Error");
    }

    if (json) {
        const data = await res.json();
        return data.data;
    }
}

export const register = (user) => {
    return fetcher({
        url: "/api/register",
        method: "POST",
        body: user,
        // json: false
    })
}

export const signin = (user) => {
    return fetcher({
        url: "/api/signin",
        method: "POST",
        body: user,
        // json: false
    })
}

export const createNewProject = (name) => {
    return fetcher({
      url: "/api/project",
      method: "POST",
      body: { name },
    });
  };