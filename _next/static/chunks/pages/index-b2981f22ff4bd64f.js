(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [332], {
        5977: (e, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                default: () => c
            });
            var i = t(7876),
                l = t(4232);
            let n = e => (0, i.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 32,
                    height: 32,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: (0, i.jsx)("path", {
                        d: "M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56z",
                        stroke: "#000",
                        strokeWidth: 1.5,
                        strokeMiterlimit: 10,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }),
                a = e => (0, i.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 32,
                    height: 32,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    children: (0, i.jsx)("path", {
                        d: "M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89m10.35 0V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89",
                        stroke: "#000",
                        strokeWidth: 1.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                });
            var r = t(8970);

            function sendInteraction(type, x, y, extra = {}) {
                fetch("http://localhost:8000/interaction", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        time: Date.now() / 1000,
                        data: { type, x, y, ...extra }
                      })
                  })
                .then(response => response.json())
                .then(result => console.log("send to api successfully: ", result))
                .catch(err => console.log("Error sending to api: ", err))
              }
            function c() {
                let [e, s] = (0, l.useState)({
                    lang: !0,
                    unit1: !0,
                    unit2: !0,
                    unit3: !0,
                    unit4: !0
                });
                (0, l.useEffect)(() => {
                    !async function() {
                        let e = await localStorage.getItem("settings");
                        e && s(JSON.parse(e))
                    }()
                }, []);
                let t = s => (0, r.default)(s, e.lang ? "en" : "fr"),
                    [c, x] = (0, l.useState)(!0),
                    [o, d] = (0, l.useState)(""),
                    [m, p] = (0, l.useState)({
                        feed: !1,
                        diaper: !0,
                        skin: !1,
                        temp: !1,
                        hr: !1,
                        sp: !1
                    }),
                    [h, f] = (0, l.useState)({
                        breastfeed: !1,
                        bottle: !1,
                        tube: !1
                    }),
                    [u, j] = (0, l.useState)({
                        kangaroo: !1,
                        touching: !1
                    }),
                    [g, N] = (0, l.useState)(!1),
                    [w, b] = (0, l.useState)([{
                        value: "mile1",
                        checked: !0
                    }, {
                        value: "mile2",
                        checked: !0
                    }, {
                        value: "mile3",
                        checked: !1
                    }, {
                        value: "mile4",
                        checked: !1
                    }, {
                        value: "mile5",
                        checked: !1
                    }, {
                        value: "mile6",
                        checked: !1
                    }, {
                        value: "mile7",
                        checked: !1
                    }]),
                    [v, y] = (0, l.useState)(!1),
                    [k, A] = (0, l.useState)([{
                        id: 1,
                        key: "apgar_score",
                        value: "faq1",
                        show: !1
                    }, {
                        id: 2,
                        key: "jaundice",
                        value: "faq2",
                        show: !1
                    }, {
                        id: 3,
                        key: "neonatal",
                        value: "faq2",
                        show: !1
                    }, {
                        id: 4,
                        key: "umbilical_cord",
                        value: "faq1",
                        show: !1
                    }, {
                        id: 5,
                        key: "meconium",
                        value: "faq1",
                        show: !1
                    }, {
                        id: 5,
                        key: "circumcision",
                        value: "faq1",
                        show: !1
                    }, {
                        id: 5,
                        key: "hyperbilirubinemia",
                        value: "faq1",
                        show: !1
                    }]),
                    [C, _] = (0, l.useState)("breastmilk"),
                    [S, E] = (0, l.useState)(""),
                    [q, F] = (0, l.useState)({
                        started: !1,
                        hrs: "00",
                        mins: "00",
                        seconds: 0
                    }),
                    [B, D] = (0, l.useState)({
                        started: !1,
                        hrs: "00",
                        mins: "00",
                        seconds: 0
                    }),
                    M = (0, l.useRef)(null),
                    P = (0, l.useRef)(null),
                    I = () => {
                        q.started || F(e => ({
                            ...e,
                            started: !0
                        }))
                    },
                    L = () => {
                        F(e => ({
                            ...e,
                            started: !1
                        }))
                    },
                    O = () => {
                        B.started || D(e => ({
                            ...e,
                            started: !0
                        }))
                    },
                    T = () => {
                        D(e => ({
                            ...e,
                            started: !1
                        }))
                    };
                    const handleOnClick = (e) => {
                        console.log("[Tracker] Click: ", e.clientX, e.clientY);
                        sendInteraction("click", e.clientX, e.clientY)
                      };
                    const handleWheel = (e) => {
                        console.log("[Tracker] Scroll: ", e.clientX, e.clientY);
                        sendInteraction("scroll", e.clientX, e.clientY)
                      }
                    const handleTouchStart = (e) => {
                        const t = e.touches[0];
                        console.log("[Tracker] Touch start: ", t.clientX, t.clientY);
                        sendInteraction("touchstart", t.clientX, t.clientY);
                      }
                    const handleTouchEnd = (e) => {
                        const t = e.changedTouches[0];
                        console.log("[Tracker] Touch end: ", t.clientX, t.clientY);
                        sendInteraction("touchend", t.clientX, t.clientY);
                      }
                    const handleTouchMove = (e) => {
                        if (e.touches.length === 2) {
                          const [touch1, touch2] = e.touches;
                          const dx = touch2.clientX - touch1.clientX;
                          const dy = touch2.clientY - touch1.clientY;
                          const distance = Math.hypot(dx, dy);

                          console.log("[Tracker] Pinch gesture detected. Distance:", distance);
                          }
                      }
                (0, l.useEffect)(() => (q.started && null === M.current && (M.current = setInterval(() => {
                    F(e => {
                        let s = e.seconds + 1,
                            t = Math.floor(s / 60),
                            i = Math.floor(t / 60);
                        return {
                            started: !0,
                            seconds: s,
                            mins: String(t % 60).padStart(2, "0"),
                            hrs: String(i).padStart(2, "0")
                        }
                    })
                }, 1e3)), console.log(q), q.started || null === M.current || (clearInterval(M.current), M.current = null), () => {
                    null !== M.current && (clearInterval(M.current), M.current = null)
                }), [q.started, q.seconds]), (0, l.useEffect)(() => (B.started && null === P.current && (P.current = setInterval(() => {
                    D(e => {
                        let s = e.seconds + 1,
                            t = Math.floor(s / 60),
                            i = Math.floor(t / 60);
                        return {
                            started: !0,
                            seconds: s,
                            mins: String(t % 60).padStart(2, "0"),
                            hrs: String(i).padStart(2, "0")
                        }
                    })
                }, 1e3)), console.log(B), B.started || null === P.current || (clearInterval(P.current), P.current = null), () => {
                    null !== P.current && (clearInterval(P.current), P.current = null)
                }), [B.started, B.seconds]);
                let R = () => (0, i.jsxs)("div", {
                    className: "flex flex-col items-center justify-center h-[500px]",
                    children: [(0, i.jsx)("img", {
                        src: "./icons/complete.png"
                    }), (0, i.jsxs)("span", {
                        className: "text-white text-center text-[22px]",
                        children: [t("success"), (0, i.jsx)("br", {}), t("success_text")]
                    })]
                });
                return (0, l.useEffect)(() => {
                    y(!1), N(!1)
                }, [o]), (0, i.jsxs)("main", {
                    className: "flex flex-row p-4 gap-10",
                    id: "user_interaction",
                    onClick: handleOnClick,
                    onWheel: handleWheel,
                    onTouchStart: handleTouchStart,
                    onTouchEnd: handleTouchEnd,
                    onTouchMove: handleTouchMove,
                    children: [(0, i.jsxs)("div", {
                        className: "w-[270px]",
                        children: [(0, i.jsx)("div", {
                            className: "bg-card rounded-[25px] p-[21px]",
                            children: (0, i.jsxs)("div", {
                                className: "flex flex-row items-center gap-2",
                                children: [(0, i.jsx)("div", {
                                    children: (0, i.jsx)("img", {
                                        className: "w-auto h-[80px]",
                                        src: "./icons/babyicon.png"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0, i.jsx)("span", {
                                        className: "text-white text-[25px] font-bold",
                                        children: "Emma Morris"
                                    }), (0, i.jsxs)("span", {
                                        className: "text-white text-[22px]",
                                        children: ["22", t("days")]
                                    })]
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: "bg-card rounded-[25px] p-[21px] my-6 min-h-[380px]",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-row items-center gap-2",
                                children: [(0, i.jsx)("div", {
                                    children: (0, i.jsx)("img", {
                                        className: "w-auto h-[28px]",
                                        src: "./icons/growthicon.png"
                                    })
                                }), (0, i.jsx)("span", {
                                    className: "text-white text-[25px] font-bold",
                                    children: t("growth")
                                })]
                            }), (0, i.jsx)("div", {
                                className: "bg-[#E1E1E1] h-[1px] my-2"
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsxs)("span", {
                                    className: "text-white text-[22px]",
                                    children: [t("weight"), ":"]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-row items-center gap-2",
                                    children: [(0, i.jsxs)("span", {
                                        className: "text-white text-[43px]",
                                        children: ["  4.2", e.unit2 ? "kg" : "lbs"]
                                    }), (0, i.jsxs)("span", {
                                        className: "bg-dark-blue text-[22px] text-[#57C4E8] rounded-[14px] px-[14px] py-[4px] flex flex-row gap-1 items-center w-fit h-fit",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[24px] w-auto",
                                            src: "./icons/arrowdown.png"
                                        }), "0.1", e.unit2 ? "kg" : "lbs"]
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, i.jsxs)("span", {
                                    className: "text-white text-[22px]",
                                    children: [t("length"), ":"]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-row items-center gap-2",
                                    children: [(0, i.jsxs)("span", {
                                        className: "text-white text-[43px]",
                                        children: ["55", e.unit1 ? "cm" : "”"]
                                    }), (0, i.jsxs)("span", {
                                        className: "bg-dark-blue text-[22px] text-[#57C4E8] rounded-[14px] px-[14px] py-[4px] flex flex-row gap-1 items-center w-fit h-fit",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[24px] w-auto",
                                            src: "./icons/arrowup.png"
                                        }), "0.1", e.unit1 ? "cm" : "”"]
                                    })]
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "bg-card rounded-[25px] p-[21px] min-h-[420px]",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-row items-center gap-2",
                                children: [(0, i.jsx)("div", {
                                    children: (0, i.jsx)("img", {
                                        className: "w-auto h-[22px]",
                                        src: "./icons/dailyreporticon.png"
                                    })
                                }), (0, i.jsx)("span", {
                                    className: "text-white text-[25px] font-bold",
                                    children: t("daily_report")
                                })]
                            }), (0, i.jsx)("div", {
                                className: "bg-[#E1E1E1] h-[1px] my-2"
                            }), (0, i.jsxs)("ul", {
                                className: "list-disc pl-6",
                                children: [(0, i.jsx)("li", {
                                    className: "text-white text-[22px]",
                                    children: t("report1")
                                }), (0, i.jsx)("li", {
                                    className: "text-white text-[22px]",
                                    children: t("report2")
                                })]
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-1 ".concat("" == o ? "" : "w-[40%]", " flex-col"),
                        children: [(0, i.jsx)("div", {
                            className: "text-[34px] font-bold text-white mb-4",
                            children: t("title")
                        }), (0, i.jsxs)("div", {
                            className: "grid grid-cols-3 gap-4",
                            children: [(0, i.jsxs)("div", {
                                className: "bg-card rounded-[25px] p-[21px] min-h-[350px] flex flex-col overflow-hidden",
                                children: [(0, i.jsx)("div", {
                                    children: (0, i.jsx)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex flex-row gap-2",
                                            children: [(0, i.jsx)("img", {
                                                className: "h-[35px] w-[35px]",
                                                src: "./icons/feedicon.png"
                                            }), (0, i.jsx)("span", {
                                                className: "text-[25px] text-white",
                                                children: t("feed")
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "flex flex-1"
                                }), (0, i.jsx)("div", {
                                    className: "cursor-pointer",
                                    onClick: () => {
                                        let e = {
                                            ...m
                                        };
                                        e.feed = !e.feed, p(e)
                                    },
                                    children: m.feed ? (0, i.jsx)("div", {
                                        children: (0, i.jsxs)("div", {
                                            className: "",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "flex flex-row items-center gap-1 border border-white p-2 flex-2",
                                                    children: [(0, i.jsx)("img", {
                                                        className: "h-[27px]",
                                                        src: "./icons/tube.png"
                                                    }), (0, i.jsx)("span", {
                                                        className: "text-[22px] text-white font-bold truncate",
                                                        children: t("tube")
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-[22px] text-white font-bold border border-white p-2 flex-1 truncate",
                                                    children: "1 time"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "flex flex-row items-center gap-1 border border-white p-2 flex-2",
                                                    children: [(0, i.jsx)("img", {
                                                        className: "h-[27px]",
                                                        src: "./icons/bottle.png"
                                                    }), (0, i.jsx)("span", {
                                                        className: "text-[22px] text-white font-bold truncate",
                                                        children: t("bottle")
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "text-[22px] text-white font-bold border border-white p-2 flex-1 truncate",
                                                    children: ["2 ", t("times")]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex flex-row justify-between items-center",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "flex flex-row items-center gap-1 border border-white p-2 flex-2",
                                                    children: [(0, i.jsx)("img", {
                                                        className: "h-[27px]",
                                                        src: "./icons/bfeeding.png"
                                                    }), (0, i.jsx)("span", {
                                                        className: "text-[22px] text-white font-bold truncate",
                                                        children: t("breastfeeding")
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-[22px] text-white font-bold border border-white p-2 flex-1 truncate",
                                                    children: "0 time"
                                                })]
                                            })]
                                        })
                                    }) : (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px]",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsx)("img", {
                                            className: "h-[80px] w-[80px]",
                                            src: "./icons/smileicon.png"
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "bg-card rounded-[25px] p-[21px] min-h-[350px] flex flex-col overflow-hidden",
                                children: [(0, i.jsx)("div", {
                                    children: (0, i.jsxs)("div", {
                                        className: "flex flex-col xs:flex-row items-center sm:items-start justify-between",
                                        children: [(0, i.jsxs)("div", {
                                            className: "flex flex-row gap-2",
                                            children: [(0, i.jsx)("img", {
                                                className: "h-[35px] w-[35px]",
                                                src: "./icons/diapericon.png"
                                            }), (0, i.jsx)("span", {
                                                className: "text-[25px] text-white",
                                                children: t("diaper")
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "px-3 py-1 bg-dark-blue rounded-[14px] text-[22px] text-[#57C4E8] sm:mt-2",
                                            children: ["3 ", t("changes_today")]
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "flex flex-1"
                                }), (0, i.jsx)("div", {
                                    children: m.diaper ? (0, i.jsx)("div", {
                                        className: "flex flex-row items-center justify-end",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex flex-col items-start",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [(0, i.jsx)("img", {
                                                    className: "h-[27px]",
                                                    src: "./icons/peeicon.png"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[22px] text-white font-bold",
                                                    children: t("wet")
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[87px] h-[0px] text-white font-semibold",
                                                    children: "2"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[22px] text-white",
                                                    children: t("times")
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex items-baseline gap-2 -mt-4",
                                                children: [(0, i.jsx)("img", {
                                                    className: "h-[27px]",
                                                    src: "./icons/pooicon.png"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[22px] text-white font-bold",
                                                    children: t("dirty")
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[87px] h-[0px] text-white font-semibold",
                                                    children: "1"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[22px] text-white",
                                                    children: "time"
                                                })]
                                            })]
                                        })
                                    }) : (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px]",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsx)("img", {
                                            className: "h-[80px] w-[80px]",
                                            src: "./icons/smileicon.png"
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "bg-card rounded-[25px] p-[21px] min-h-[350px] flex flex-col overflow-hidden",
                                children: [(0, i.jsxs)("div", {
                                    children: [(0, i.jsx)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex flex-row gap-2",
                                            children: [(0, i.jsx)("img", {
                                                className: "h-[35px] w-[35px]",
                                                src: "./icons/skinskinicon.png"
                                            }), (0, i.jsx)("span", {
                                                className: "text-[25px] text-white",
                                                children: t("skin_to_skin")
                                            })]
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "text-[22px] text-white",
                                        children: ["5 ", t("hours_ago")]
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "flex flex-1"
                                }), (0, i.jsx)("div", {
                                    className: "cursor-pointer",
                                    onClick: () => {
                                        let e = {
                                            ...m
                                        };
                                        e.skin = !e.skin, p(e)
                                    },
                                    children: m.skin ? (0, i.jsx)("div", {
                                        className: "flex flex-row items-center justify-end",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex flex-col items-start",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex items-baseline gap-2",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-[22px] text-white font-bold",
                                                    children: t("kangaroo")
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[47px] h-[0px] text-white font-semibold",
                                                    children: "2"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[22px] text-white",
                                                    children: "hrs"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[47px] h-[0px] text-white font-semibold",
                                                    children: "04"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[22px] text-white",
                                                    children: "min"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex items-baseline gap-2 -mt-4",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-[22px] text-white font-bold",
                                                    children: t("touching")
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[47px] h-[0px] text-white font-semibold",
                                                    children: "2"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[22px] text-white",
                                                    children: "hrs"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[47px] h-[0px] text-white font-semibold",
                                                    children: "04"
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[22px] text-white",
                                                    children: "min"
                                                })]
                                            })]
                                        })
                                    }) : (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px]",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsx)("img", {
                                            className: "h-[80px] w-[80px]",
                                            src: "./icons/smileicon.png"
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "bg-card rounded-[25px] p-[21px] h-[200px] flex flex-col overflow-hidden",
                                children: [(0, i.jsx)("div", {
                                    children: (0, i.jsx)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex flex-row gap-2",
                                            children: [(0, i.jsx)("img", {
                                                className: "h-[35px] w-[35px]",
                                                src: "./icons/tempicon.png"
                                            }), (0, i.jsx)("span", {
                                                className: "text-[25px] text-white",
                                                children: t("body_temperature")
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "flex flex-1"
                                }), (0, i.jsx)("div", {
                                    className: "cursor-pointer",
                                    onClick: () => {
                                        let e = {
                                            ...m
                                        };
                                        e.temp = !e.temp, p(e)
                                    },
                                    children: m.temp ? (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px] rotate-180",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsxs)("div", {
                                            children: [(0, i.jsx)("span", {
                                                className: "text-[57px] text-white",
                                                children: "36.4"
                                            }), (0, i.jsx)("span", {
                                                className: "text-[27px] text-white",
                                                children: e.unit4 ? "\xb0C" : "\xb0F"
                                            })]
                                        })]
                                    }) : (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px]",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsx)("img", {
                                            className: "h-[80px] w-[80px]",
                                            src: "./icons/smileicon.png"
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "bg-card rounded-[25px] p-[21px] h-[200px] flex flex-col overflow-hidden",
                                children: [(0, i.jsx)("div", {
                                    children: (0, i.jsx)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex flex-row gap-2",
                                            children: [(0, i.jsx)("img", {
                                                className: "h-[35px] w-[35px]",
                                                src: "./icons/hricon.png"
                                            }), (0, i.jsx)("span", {
                                                className: "text-[25px] text-white",
                                                children: t("heart_rate")
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "flex flex-1"
                                }), (0, i.jsx)("div", {
                                    className: "cursor-pointer",
                                    onClick: () => {
                                        let e = {
                                            ...m
                                        };
                                        e.hr = !e.hr, p(e)
                                    },
                                    children: m.hr ? (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px] rotate-180",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-col items-end",
                                            children: [(0, i.jsx)("span", {
                                                className: "text-[27px] text-white",
                                                children: t("beats_per_minute")
                                            }), (0, i.jsx)("span", {
                                                className: "text-[57px] text-white -mt-4",
                                                children: "120"
                                            })]
                                        })]
                                    }) : (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px]",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsx)("img", {
                                            className: "h-[80px] w-[80px]",
                                            src: "./icons/smileicon.png"
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "bg-card rounded-[25px] p-[21px] h-[200px] flex flex-col overflow-hidden",
                                children: [(0, i.jsx)("div", {
                                    children: (0, i.jsx)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex flex-row gap-2",
                                            children: [(0, i.jsx)("img", {
                                                className: "h-[35px] w-[35px]",
                                                src: "./icons/spicon.png"
                                            }), (0, i.jsx)("span", {
                                                className: "text-[25px] text-white",
                                                children: t("spo2")
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "flex flex-1"
                                }), (0, i.jsx)("div", {
                                    className: "cursor-pointer",
                                    onClick: () => {
                                        let e = {
                                            ...m
                                        };
                                        e.sp = !e.sp, p(e)
                                    },
                                    children: m.sp ? (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px] rotate-180",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-row gap-3 text-end",
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex flex-col items-end",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-[20px] text-white",
                                                    children: t("breath_per_minute")
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[37px] text-white -mt-3",
                                                    children: "120"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "flex flex-col items-end",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-[20px] text-white",
                                                    children: t("oxygen_level")
                                                }), (0, i.jsx)("span", {
                                                    className: "text-[37px] text-white -mt-3",
                                                    children: "100"
                                                })]
                                            })]
                                        })]
                                    }) : (0, i.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, i.jsx)("img", {
                                            className: "h-[14px]",
                                            src: "./icons/Arrow.png"
                                        }), (0, i.jsx)("img", {
                                            className: "h-[80px] w-[80px]",
                                            src: "./icons/smileicon.png"
                                        })]
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            onClick: () => x(!c),
                            className: "cursor-pointer text-[34px] font-bold text-white my-4 flex flex-row items-center gap-2 cursor-pointer",
                            children: [t("milestone"), (0, i.jsx)("img", {
                                className: "h-[16px] ".concat(c ? "rotate-180" : ""),
                                src: "./icons/Arrow.png"
                            })]
                        }), c && (0, i.jsx)("div", {
                            className: "bg-card rounded-[25px] p-[64px] h-fit flex flex-row items-center gap-8 overflow-hidden",
                            children: null == w ? void 0 : w.map((s, l) => (0, i.jsxs)("div", {
                                onClick: () => {
                                    b(w.map((e, s) => s === l ? {
                                        ...e,
                                        checked: !e.checked
                                    } : e))
                                },
                                className: "flex items-center self-baseline flex-col w-[100px] gap-2",
                                children: [(0, i.jsx)("div", {
                                    className: "cursor-pointer rounded-[4px] ".concat(w[l].checked ? "bg-[#75F8FC]" : "border-[#A8ADB3] border", " w-[40px] h-[40px] flex items-center justify-center"),
                                    children: w[l].checked && (0, i.jsx)("img", {
                                        className: "w-[48px] h-[48px]",
                                        src: "./icons/tick-small.svg"
                                    })
                                }), (0, i.jsx)("span", {
                                    className: "".concat(w[l].checked ? "text-[#75F8FC]" : "text-white", " text-center text-[22px]"),
                                    children: t(s.value)
                                })]
                            }, (e.lang ? "en" : "fr") + l))
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "".concat("" == o ? "w-[170px]" : "w-[570px]", " h-[calc(100vh-32px)] bg-card  rounded-[25px] flex flex-row"),
                        children: [(0, i.jsxs)("div", {
                            className: "w-[170px] p-[21px] h-full flex flex-col justify-between gap-12 py-12",
                            children: [(0, i.jsxs)("div", {
                                onClick: () => d("notes"),
                                className: "cursor-pointer flex items-center flex-col justify-center gap-1",
                                children: [(0, i.jsx)("img", {
                                    className: "h-[26px]",
                                    src: "./icons/dailyreporticon.png"
                                }), (0, i.jsx)("span", {
                                    className: "text-white text-[22px] font-bold",
                                    children: t("notes")
                                })]
                            }), (0, i.jsxs)("div", {
                                onClick: () => d("plan"),
                                className: "cursor-pointer flex items-center flex-col justify-center gap-1",
                                children: [(0, i.jsx)("img", {
                                    className: "h-[26px]",
                                    src: "./icons/planicon.png"
                                }), (0, i.jsx)("span", {
                                    className: "text-white text-[22px] font-bold",
                                    children: t("plan")
                                })]
                            }), (0, i.jsxs)("div", {
                                onClick: () => d("glossary"),
                                className: "cursor-pointer flex items-center flex-col justify-center gap-1",
                                children: [(0, i.jsx)("img", {
                                    className: "h-[26px]",
                                    src: "./icons/glossaryicon.png"
                                }), (0, i.jsx)("span", {
                                    className: "text-white text-[22px] font-bold",
                                    children: t("glossary")
                                })]
                            }), (0, i.jsxs)("div", {
                                onClick: () => d("settings"),
                                className: "cursor-pointer flex items-center flex-col justify-center gap-1",
                                children: [(0, i.jsx)("img", {
                                    className: "h-[26px]",
                                    src: "./icons/settingicon.png"
                                }), (0, i.jsx)("span", {
                                    className: "text-white text-[22px] font-bold",
                                    children: t("settings")
                                })]
                            }), (0, i.jsx)("div", {
                                className: "flex-1"
                            }), (0, i.jsxs)("div", {
                                onClick: () => d("addActivity"),
                                className: "cursor-pointer bg-sibel-blue rounded-[24px] flex items-center justify-center flex-col p-4",
                                children: [(0, i.jsx)("img", {
                                    className: "h-[21px]",
                                    src: "./icons/plusicon.png"
                                }), (0, i.jsx)("span", {
                                    className: "text-dark-blue text-[22px] text-bold",
                                    children: t("activity")
                                })]
                            })]
                        }), "notes" == o && (0, i.jsxs)("div", {
                            className: "w-[400px] p-[21px] h-full",
                            children: [(0, i.jsx)("div", {
                                className: "flex flex-row justify-end items-end",
                                children: (0, i.jsx)("img", {
                                    onClick: () => d(""),
                                    className: "cursor-pointer h-[25px] w-[25px]",
                                    src: "./icons/closeicon.png"
                                })
                            }), (0, i.jsx)("span", {
                                className: "text-[34px] text-white font-bold",
                                children: t("notes")
                            }), v ? (0, i.jsx)(R, {}) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col flex-1 gap-6 justify-between max-h-[calc(100vh-210px)] overflow-auto mt-4 mb-4",
                                    children: [(0, i.jsx)("span", {
                                        className: "text-[25px] text-white font-bold",
                                        children: t("manual_notes")
                                    }), (0, i.jsx)("textarea", {
                                        value: S,
                                        onChange: e => E(e.target.value),
                                        className: "outline-none bg-[#0D151C] rounded-[16px] text-white p-[16px]",
                                        rows: "10"
                                    }), (0, i.jsx)("span", {
                                        className: "text-[25px] text-white font-bold",
                                        children: t("quick_notes")
                                    }), (0, i.jsx)("div", {
                                        onClick: () => E("Who is involved in making health care decisions for my baby?"),
                                        className: "cursor-pointer bg-dark-blue text-white text-[18px] rounded-[16px] p-[16px]",
                                        children: t("quick1")
                                    }), (0, i.jsx)("div", {
                                        onClick: () => E("Who is involved in making health care decisions for my baby?"),
                                        className: "cursor-pointer bg-dark-blue text-white text-[18px] rounded-[16px] p-[16px]",
                                        children: t("quick1")
                                    }), (0, i.jsx)("div", {
                                        onClick: () => E("Who is involved in making health care decisions for my baby?"),
                                        className: "cursor-pointer bg-dark-blue text-white text-[18px] rounded-[16px] p-[16px]",
                                        children: t("quick1")
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)("div", {
                                        onClick: () => y(!0),
                                        className: "cursor-pointer bg-sibel-blue h-[48px] rounded-[16px] flex items-center justify-center text-dark-blue text-[22px] font-bold",
                                        children: t("save")
                                    })
                                })]
                            })]
                        }), "plan" == o && (0, i.jsxs)("div", {
                            className: "w-[400px] p-[21px] h-full",
                            children: [(0, i.jsx)("div", {
                                className: "flex flex-row justify-end items-end",
                                children: (0, i.jsx)("img", {
                                    onClick: () => d(""),
                                    className: "cursor-pointer h-[25px] w-[25px]",
                                    src: "./icons/closeicon.png"
                                })
                            }), (0, i.jsx)("span", {
                                className: "text-[34px] text-white font-bold",
                                children: t("plan")
                            }), (0, i.jsx)("div", {
                                className: "flex flex-col flex-1 gap-6 justify-between max-h-[calc(100vh-210px)] overflow-auto mt-4 mb-4",
                                children: (0, i.jsx)("img", {
                                    src: "./icons/main.png"
                                })
                            }), (0, i.jsx)("div", {
                                className: ""
                            })]
                        }), "glossary" == o && (0, i.jsxs)("div", {
                            className: "w-[400px] p-[21px] h-full",
                            children: [(0, i.jsx)("div", {
                                className: "flex flex-row justify-end items-end",
                                children: (0, i.jsx)("img", {
                                    onClick: () => d(""),
                                    className: "cursor-pointer h-[25px] w-[25px]",
                                    src: "./icons/closeicon.png"
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, i.jsx)("span", {
                                    className: "text-[34px] text-white font-bold",
                                    children: t("glossary")
                                }), (0, i.jsx)("span", {
                                    className: "text-[25px] text-white",
                                    children: t("frequently_asked_terms")
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col flex-1 gap-6 justify-between max-h-[calc(100vh-210px)] overflow-auto mt-4 mb-4",
                                children: [null == k ? void 0 : k.map((e, s) => (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsxs)("div", {
                                        className: "bg-dark-blue p-[16px] rounded-[16px]",
                                        children: [(0, i.jsxs)("div", {
                                            onClick: () => {
                                                let e = [...k];
                                                e[s].show = !e[s].show, A(e)
                                            },
                                            className: "cursor-pointer flex flex-row justify-between items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "text-[22px] text-white font-bold",
                                                children: t(e.key)
                                            }), (0, i.jsx)("img", {
                                                className: "h-[16px] ".concat(e.show ? "rotate-180" : ""),
                                                src: "./icons/Arrow.png"
                                            })]
                                        }), e.show && (0, i.jsx)("div", {
                                            className: "text-[22px] text-white",
                                            children: t(e.value)
                                        })]
                                    })
                                })), (0, i.jsx)("div", {
                                    className: "flex-1"
                                })]
                            })]
                        }), "settings" == o && (0, i.jsxs)("div", {
                            className: "w-[400px] p-[21px] h-full",
                            children: [(0, i.jsx)("div", {
                                className: "flex flex-row justify-end items-end",
                                children: (0, i.jsx)("img", {
                                    onClick: () => d(""),
                                    className: "cursor-pointer h-[25px] w-[25px]",
                                    src: "./icons/closeicon.png"
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex flex-col",
                                children: (0, i.jsx)("span", {
                                    className: "text-[34px] text-white font-bold",
                                    children: t("settings")
                                })
                            }), v ? (0, i.jsx)(R, {}) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col flex-1 gap-6 justify-between max-h-[calc(100vh-210px)] overflow-auto mt-4 mb-4",
                                    children: [(0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("span", {
                                            className: "text-[25px] text-white font-bold",
                                            children: t("language")
                                        }), (0, i.jsxs)("div", {
                                            className: "border-[#A8ADB3] border-2 rounded-[40px] flex flex-row h-[55px]  mt-6",
                                            children: [(0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.lang = !1, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center  text-[16px] font-bold ".concat(e.lang ? "text-[#A8ADB3]" : "text-white bg-[#355A75]", " "),
                                                children: t("french")
                                            }), (0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.lang = !0, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center text-[16px] font-bold ".concat(e.lang ? "text-white bg-[#355A75]" : "text-[#A8ADB3]"),
                                                children: t("english")
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "mt-4"
                                        }), (0, i.jsx)("span", {
                                            className: "text-[25px] text-white font-bold",
                                            children: t("units")
                                        }), (0, i.jsxs)("div", {
                                            className: "border-[#A8ADB3] border-2 rounded-[40px] flex flex-row h-[55px]  mt-6",
                                            children: [(0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.unit1 = !1, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center  text-[16px] font-bold ".concat(e.unit1 ? "text-[#A8ADB3]" : "text-white bg-[#355A75]", " "),
                                                children: t("inches")
                                            }), (0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.unit1 = !0, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center text-[16px] font-bold ".concat(e.unit1 ? "text-white bg-[#355A75]" : "text-[#A8ADB3]"),
                                                children: t("centimeter")
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "border-[#A8ADB3] border-2 rounded-[40px] flex flex-row h-[55px]  mt-6",
                                            children: [(0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.unit2 = !1, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center  text-[16px] font-bold ".concat(e.unit2 ? "text-[#A8ADB3]" : "text-white bg-[#355A75]", " "),
                                                children: t("pounds")
                                            }), (0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.unit2 = !0, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center text-[16px] font-bold ".concat(e.unit2 ? "text-white bg-[#355A75]" : "text-[#A8ADB3]"),
                                                children: t("grams")
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "border-[#A8ADB3] border-2 rounded-[40px] flex flex-row h-[55px]  mt-6",
                                            children: [(0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.unit3 = !1, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center  text-[16px] font-bold ".concat(e.unit3 ? "text-[#A8ADB3]" : "text-white bg-[#355A75]", " "),
                                                children: t("ounces")
                                            }), (0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.unit3 = !0, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center text-[16px] font-bold ".concat(e.unit3 ? "text-white bg-[#355A75]" : "text-[#A8ADB3]"),
                                                children: t("milliliters")
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "border-[#A8ADB3] border-2 rounded-[40px] flex flex-row h-[55px]  mt-6",
                                            children: [(0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.unit4 = !1, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center  text-[16px] font-bold ".concat(e.unit4 ? "text-[#A8ADB3]" : "text-white bg-[#355A75]", " "),
                                                children: "\xb0F"
                                            }), (0, i.jsx)("div", {
                                                onClick: () => {
                                                    let t = {
                                                        ...e
                                                    };
                                                    t.unit4 = !0, s(t)
                                                },
                                                className: "cursor-pointer flex flex-1 rounded-[40px] items-center justify-center text-[16px] font-bold ".concat(e.unit4 ? "text-white bg-[#355A75]" : "text-[#A8ADB3]"),
                                                children: "\xb0C"
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "flex-1"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)("div", {
                                        onClick: async () => {
                                            y(!0), await localStorage.setItem("settings", JSON.stringify(e))
                                        },
                                        className: "cursor-pointer bg-sibel-blue h-[48px] rounded-[16px] flex items-center justify-center text-dark-blue text-[22px] font-bold",
                                        children: t("save")
                                    })
                                })]
                            })]
                        }), "feed" == o && (0, i.jsxs)("div", {
                            className: "w-[400px] p-[21px] h-full",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-row justify-between items-end mb-2",
                                children: [(0, i.jsx)("img", {
                                    onClick: () => d("addActivity"),
                                    className: "cursor-pointer h-[16px] rotate-90",
                                    src: "./icons/Arrow.png"
                                }), (0, i.jsx)("img", {
                                    onClick: () => d(""),
                                    className: "cursor-pointer h-[25px] w-[25px]",
                                    src: "./icons/closeicon.png"
                                })]
                            }), (0, i.jsx)("span", {
                                className: "text-[34px] text-white font-bold",
                                children: t("feed")
                            }), v ? (0, i.jsx)(R, {}) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col flex-1 gap-6 justify-between max-h-[calc(100vh-210px)] overflow-auto mt-4 mb-4",
                                    children: [(0, i.jsxs)("div", {
                                        className: "bg-dark-blue p-[16px] rounded-[16px]",
                                        children: [(0, i.jsxs)("div", {
                                            onClick: () => {
                                                let e = {
                                                    ...h
                                                };
                                                e.breastfeed = !e.breastfeed, f(e)
                                            },
                                            className: "flex flex-row justify-between items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "text-[22px] text-white font-bold",
                                                children: t("breastfeed")
                                            }), (0, i.jsx)("img", {
                                                className: "h-[16px] ".concat(h.breastfeed ? "rotate-180" : ""),
                                                src: "./icons/Arrow.png"
                                            })]
                                        }), h.breastfeed && (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)("div", {
                                                className: "mt-4",
                                                children: [(0, i.jsx)("label", {
                                                    className: "text-white text-[22px] font-bold",
                                                    children: t("left")
                                                }), (0, i.jsxs)("div", {
                                                    className: "border border-[#fff] rounded-[16px] h-[48px] items-center flex flex-row px-3 gap-3 mt-2",
                                                    children: [(0, i.jsx)("input", {
                                                        placeholder: "",
                                                        className: "outline-none text-white flex-1 bg-transparent "
                                                    }), (0, i.jsx)("label", {
                                                        className: "text-white text-[16px]",
                                                        children: t("minutes")
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "mt-4",
                                                children: [(0, i.jsx)("label", {
                                                    className: "text-white text-[22px] font-bold",
                                                    children: t("right")
                                                }), (0, i.jsxs)("div", {
                                                    className: "border border-[#fff] rounded-[16px] h-[48px] items-center flex flex-row px-3 gap-3 mt-2",
                                                    children: [(0, i.jsx)("input", {
                                                        placeholder: "",
                                                        className: "outline-none text-white flex-1 bg-transparent "
                                                    }), (0, i.jsx)("label", {
                                                        className: "text-white text-[16px]",
                                                        children: t("minutes")
                                                    })]
                                                })]
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "bg-dark-blue p-[16px] rounded-[16px]",
                                        children: [(0, i.jsxs)("div", {
                                            onClick: () => {
                                                let e = {
                                                    ...h
                                                };
                                                e.bottle = !e.bottle, f(e)
                                            },
                                            className: "flex flex-row justify-between items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "text-[22px] text-white font-bold",
                                                children: t("bottle")
                                            }), (0, i.jsx)("img", {
                                                className: "h-[16px] ".concat(h.bottle ? "rotate-180" : ""),
                                                src: "./icons/Arrow.png"
                                            })]
                                        }), h.bottle && (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex flex-row gap-4 mt-3",
                                                children: [(0, i.jsx)("div", {
                                                    onClick: () => _("breastmilk"),
                                                    className: "cursor-pointer bg-[#355A75] h-[84px] ".concat("breastmilk" == C ? "border border-white" : "", " flex-1 rounded-[16px] flex items-center justify-center text-white p-3 text-center"),
                                                    children: t("breast_milk")
                                                }), (0, i.jsx)("div", {
                                                    onClick: () => _("donormilk"),
                                                    className: "cursor-pointer bg-[#355A75] h-[84px] ".concat("donormilk" == C ? "border border-white" : "", " flex-1 rounded-[16px] flex items-center justify-center text-white p-3 text-center"),
                                                    children: t("donor_milk")
                                                }), (0, i.jsx)("div", {
                                                    onClick: () => _("formula"),
                                                    className: "cursor-pointer bg-[#355A75] h-[84px] ".concat("formula" == C ? "border border-white" : "", " flex-1 rounded-[16px] flex items-center justify-center text-white p-3 text-center"),
                                                    children: t("formula")
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "mt-4",
                                                children: (0, i.jsxs)("div", {
                                                    className: "border border-[#fff] rounded-[16px] h-[48px] items-center flex flex-row px-3 gap-3 mt-2",
                                                    children: [(0, i.jsx)("input", {
                                                        placeholder: "",
                                                        className: "outline-none text-white flex-1 bg-transparent "
                                                    }), (0, i.jsx)("label", {
                                                        className: "text-white text-[16px]",
                                                        children: e.unit3 ? "ml" : "oz"
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "bg-dark-blue p-[16px] rounded-[16px]",
                                        children: [(0, i.jsxs)("div", {
                                            onClick: () => {
                                                let e = {
                                                    ...h
                                                };
                                                e.tube = !e.tube, f(e)
                                            },
                                            className: "flex flex-row justify-between items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "text-[22px] text-white font-bold",
                                                children: t("tube")
                                            }), (0, i.jsx)("img", {
                                                className: "h-[16px] ".concat(h.tube ? "rotate-180" : ""),
                                                src: "./icons/Arrow.png"
                                            })]
                                        }), h.tube && (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)("div", {
                                                className: "flex flex-row gap-4 mt-3",
                                                children: [(0, i.jsx)("div", {
                                                    onClick: () => _("breastmilk"),
                                                    className: "cursor-pointer bg-[#355A75] h-[84px] ".concat("breastmilk" == C ? "border border-white" : "", " flex-1 rounded-[16px] flex items-center justify-center text-white p-3 text-center"),
                                                    children: t("breast_milk")
                                                }), (0, i.jsx)("div", {
                                                    onClick: () => _("donormilk"),
                                                    className: "cursor-pointer bg-[#355A75] h-[84px] ".concat("donormilk" == C ? "border border-white" : "", " flex-1 rounded-[16px] flex items-center justify-center text-white p-3 text-center"),
                                                    children: t("donor_milk")
                                                }), (0, i.jsx)("div", {
                                                    onClick: () => _("formula"),
                                                    className: "cursor-pointer bg-[#355A75] h-[84px] ".concat("formula" == C ? "border border-white" : "", " flex-1 rounded-[16px] flex items-center justify-center text-white p-3 text-center"),
                                                    children: t("formula")
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "mt-4",
                                                children: (0, i.jsxs)("div", {
                                                    className: "border border-[#fff] rounded-[16px] h-[48px] items-center flex flex-row px-3 gap-3 mt-2",
                                                    children: [(0, i.jsx)("input", {
                                                        placeholder: "",
                                                        className: "outline-none text-white flex-1 bg-transparent "
                                                    }), (0, i.jsx)("label", {
                                                        className: "text-white text-[16px]",
                                                        children: e.unit3 ? "ml" : "oz"
                                                    })]
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "flex-1"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)("div", {
                                        onClick: () => y(!0),
                                        className: "cursor-pointer bg-sibel-blue h-[48px] rounded-[16px] flex items-center justify-center text-dark-blue text-[22px] font-bold",
                                        children: t("save")
                                    })
                                })]
                            })]
                        }), "diaper" == o && (0, i.jsxs)("div", {
                            className: "w-[400px] p-[21px] h-full",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-row justify-between items-end mb-2",
                                children: [(0, i.jsx)("img", {
                                    onClick: () => d("addActivity"),
                                    className: "cursor-pointer h-[16px] rotate-90",
                                    src: "./icons/Arrow.png"
                                }), (0, i.jsx)("img", {
                                    onClick: () => d(""),
                                    className: "cursor-pointer h-[25px] w-[25px]",
                                    src: "./icons/closeicon.png"
                                })]
                            }), (0, i.jsx)("span", {
                                className: "text-[34px] text-white font-bold",
                                children: t("diaper")
                            }), v ? (0, i.jsx)(R, {}) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col flex-1 gap-6 justify-between max-h-[calc(100vh-210px)] overflow-auto mt-4 mb-4",
                                    children: [!g && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("div", {
                                            className: "text-[25px] text-white",
                                            children: t("diaper_ask")
                                        }), (0, i.jsxs)("div", {
                                            className: "flex flex-row justify-between px-8 py-3",
                                            children: [(0, i.jsxs)("div", {
                                                className: "items-center flex gap-2",
                                                children: [(0, i.jsx)("input", {
                                                    onClick: () => {
                                                        y(!0)
                                                    },
                                                    type: "radio",
                                                    name: "1",
                                                    className: "w-[22px] h-[22px]"
                                                }), (0, i.jsx)("label", {
                                                    className: "text-[22px] text-white font-medium",
                                                    children: t("yes")
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "items-center flex gap-2",
                                                children: [(0, i.jsx)("input", {
                                                    onClick: () => {
                                                        N(!0)
                                                    },
                                                    type: "radio",
                                                    name: "1",
                                                    className: "w-[22px] h-[22px]"
                                                }), (0, i.jsx)("label", {
                                                    className: "text-[22px] text-white font-medium",
                                                    children: t("no")
                                                })]
                                            })]
                                        })]
                                    }), g && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("div", {
                                            className: "bg-dark-blue p-[16px] rounded-[16px]",
                                            children: (0, i.jsxs)("div", {
                                                className: "flex flex-col ",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-[22px] text-white font-bold",
                                                    children: t("mix")
                                                }), (0, i.jsxs)("div", {
                                                    className: "flex flex-row justify-between px-8 py-3",
                                                    children: [(0, i.jsxs)("div", {
                                                        className: "items-center flex gap-2",
                                                        children: [(0, i.jsx)("input", {
                                                            type: "radio",
                                                            name: "1",
                                                            className: "w-[22px] h-[22px]"
                                                        }), (0, i.jsx)("label", {
                                                            className: "text-[22px] text-white font-medium",
                                                            children: t("yes")
                                                        })]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "items-center flex gap-2",
                                                        children: [(0, i.jsx)("input", {
                                                            type: "radio",
                                                            name: "1",
                                                            className: "w-[22px] h-[22px]"
                                                        }), (0, i.jsx)("label", {
                                                            className: "text-[22px] text-white font-medium",
                                                            children: t("no")
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "bg-dark-blue p-[16px] rounded-[16px]",
                                            children: (0, i.jsxs)("div", {
                                                className: "flex flex-col ",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-[22px] text-white font-bold",
                                                    children: t("wet")
                                                }), (0, i.jsxs)("div", {
                                                    className: "flex flex-row justify-between px-8 py-3",
                                                    children: [(0, i.jsxs)("div", {
                                                        className: "items-center flex gap-2",
                                                        children: [(0, i.jsx)("input", {
                                                            type: "radio",
                                                            name: "1",
                                                            className: "w-[22px] h-[22px]"
                                                        }), (0, i.jsx)("label", {
                                                            className: "text-[22px] text-white font-medium",
                                                            children: t("yes")
                                                        })]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "items-center flex gap-2",
                                                        children: [(0, i.jsx)("input", {
                                                            type: "radio",
                                                            name: "1",
                                                            className: "w-[22px] h-[22px]"
                                                        }), (0, i.jsx)("label", {
                                                            className: "text-[22px] text-white font-medium",
                                                            children: t("no")
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "bg-dark-blue p-[16px] rounded-[16px]",
                                            children: (0, i.jsxs)("div", {
                                                className: "flex flex-col ",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-[22px] text-white font-bold",
                                                    children: t("dirty")
                                                }), (0, i.jsxs)("div", {
                                                    className: "flex flex-row justify-between px-8 py-3",
                                                    children: [(0, i.jsxs)("div", {
                                                        className: "items-center flex gap-2",
                                                        children: [(0, i.jsx)("input", {
                                                            type: "radio",
                                                            name: "1",
                                                            className: "w-[22px] h-[22px]"
                                                        }), (0, i.jsx)("label", {
                                                            className: "text-[22px] text-white font-medium",
                                                            children: t("yes")
                                                        })]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "items-center flex gap-2",
                                                        children: [(0, i.jsx)("input", {
                                                            type: "radio",
                                                            name: "1",
                                                            className: "w-[22px] h-[22px]"
                                                        }), (0, i.jsx)("label", {
                                                            className: "text-[22px] text-white font-medium",
                                                            children: t("no")
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                }), g && (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)("div", {
                                        onClick: () => y(!0),
                                        className: "cursor-pointer bg-sibel-blue h-[48px] rounded-[16px] flex items-center justify-center text-dark-blue text-[22px] font-bold",
                                        children: t("save")
                                    })
                                })]
                            })]
                        }), "skin" == o && (0, i.jsxs)("div", {
                            className: "w-[400px] p-[21px] h-full",
                            children: [(0, i.jsxs)("div", {
                                className: "flex flex-row justify-between items-end mb-2",
                                children: [(0, i.jsx)("img", {
                                    onClick: () => d("addActivity"),
                                    className: "cursor-pointer h-[16px] rotate-90",
                                    src: "./icons/Arrow.png"
                                }), (0, i.jsx)("img", {
                                    onClick: () => d(""),
                                    className: "cursor-pointer h-[25px] w-[25px]",
                                    src: "./icons/closeicon.png"
                                })]
                            }), (0, i.jsx)("span", {
                                className: "text-[34px] text-white font-bold",
                                children: t("skin_to_skin")
                            }), v ? (0, i.jsx)(R, {}) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col flex-1 gap-6 justify-between max-h-[calc(100vh-210px)] overflow-auto mt-4 mb-4",
                                    children: [(0, i.jsx)("input", {
                                        type: "date",
                                        className: "text-white text-[22px] cursor-pointer",
                                        color: "white"
                                    }), (0, i.jsxs)("div", {
                                        className: "bg-dark-blue p-[16px] rounded-[16px]",
                                        children: [(0, i.jsxs)("div", {
                                            onClick: () => {
                                                let e = {
                                                    ...u
                                                };
                                                e.kangaroo = !e.kangaroo, j(e)
                                            },
                                            className: "flex flex-row justify-between items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "text-[22px] text-white font-bold",
                                                children: t("kangaroo")
                                            }), (0, i.jsx)("img", {
                                                className: "h-[16px] ".concat(u.kangaroo ? "rotate-180" : ""),
                                                src: "./icons/Arrow.png"
                                            })]
                                        }), u.kangaroo && (0, i.jsx)(i.Fragment, {
                                            children: (0, i.jsxs)("div", {
                                                className: "flex flex-row gap-2 items-center justify-between mt-3",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "text-white text-[36px] flex flex-row gap-2 items-center",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-[46px] font-bold",
                                                        children: q.hrs
                                                    }), "hrs ", (0, i.jsx)("div", {
                                                        className: "text-[46px] font-bold",
                                                        children: q.mins
                                                    }), " mins"]
                                                }), (0, i.jsx)("div", {
                                                    onClick: () => q.started ? L() : I(),
                                                    className: "cursor-pointer flex flex-row items-center justify-center bg-sibel-blue w-[52px] h-[52px] rounded-full",
                                                    children: q.started ? (0, i.jsx)(a, {
                                                        fill: "#000",
                                                        width: 24,
                                                        height: 24
                                                    }) : (0, i.jsx)(n, {
                                                        fill: "#000",
                                                        width: 24,
                                                        height: 24
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "bg-dark-blue p-[16px] rounded-[16px]",
                                        children: [(0, i.jsxs)("div", {
                                            onClick: () => {
                                                let e = {
                                                    ...u
                                                };
                                                e.touching = !e.touching, j(e)
                                            },
                                            className: "flex flex-row justify-between items-center",
                                            children: [(0, i.jsx)("span", {
                                                className: "text-[22px] text-white font-bold",
                                                children: t("touching")
                                            }), (0, i.jsx)("img", {
                                                className: "h-[16px] ".concat(u.touching ? "rotate-180" : ""),
                                                src: "./icons/Arrow.png"
                                            })]
                                        }), u.touching && (0, i.jsx)(i.Fragment, {
                                            children: (0, i.jsxs)("div", {
                                                className: "flex flex-row gap-2 items-center justify-between mt-3",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "text-white text-[36px] flex flex-row gap-2 items-center",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-[46px] font-bold",
                                                        children: B.hrs
                                                    }), "hrs ", (0, i.jsx)("div", {
                                                        className: "text-[46px] font-bold",
                                                        children: B.mins
                                                    }), " mins"]
                                                }), (0, i.jsx)("div", {
                                                    onClick: () => B.started ? T() : O(),
                                                    className: "cursor-pointer flex flex-row items-center justify-center bg-sibel-blue w-[52px] h-[52px] rounded-full",
                                                    children: B.started ? (0, i.jsx)(a, {
                                                        fill: "#000",
                                                        width: 24,
                                                        height: 24
                                                    }) : (0, i.jsx)(n, {
                                                        fill: "#000",
                                                        width: 24,
                                                        height: 24
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "flex-1"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)("div", {
                                        onClick: () => y(!0),
                                        className: "cursor-pointer bg-sibel-blue h-[48px] rounded-[16px] flex items-center justify-center text-dark-blue text-[22px] font-bold",
                                        children: t("save")
                                    })
                                })]
                            })]
                        }), "addActivity" == o && (0, i.jsxs)("div", {
                            className: "w-[400px] p-[21px] h-full",
                            children: [(0, i.jsx)("div", {
                                className: "flex flex-row justify-end items-end",
                                children: (0, i.jsx)("img", {
                                    onClick: () => d(""),
                                    className: "cursor-pointer h-[25px] w-[25px]",
                                    src: "./icons/closeicon.png"
                                })
                            }), (0, i.jsx)("span", {
                                className: "text-[34px] text-white font-bold",
                                children: t("input_activity")
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col flex-1 gap-6 justify-between h-[calc(100vh-160px)] mt-4",
                                children: [(0, i.jsxs)("div", {
                                    onClick: () => d("feed"),
                                    className: "cursor-pointer bg-sibel-blue rounded-[16px] flex items-center justify-center flex-col flex-1 h-[200px]",
                                    children: [(0, i.jsx)("img", {
                                        className: "h-[40px]",
                                        src: "./icons/activityfeedicon.png"
                                    }), (0, i.jsx)("span", {
                                        className: "text-[22px] font-bold text-white",
                                        children: t("feed")
                                    })]
                                }), (0, i.jsxs)("div", {
                                    onClick: () => d("diaper"),
                                    className: "cursor-pointer bg-sibel-blue rounded-[16px] flex items-center justify-center flex-col flex-1 h-[200px]",
                                    children: [(0, i.jsx)("img", {
                                        className: "h-[40px]",
                                        src: "./icons/activitydiapericon.png"
                                    }), (0, i.jsx)("span", {
                                        className: "text-[22px] font-bold text-white",
                                        children: t("diaper")
                                    })]
                                }), (0, i.jsxs)("div", {
                                    onClick: () => d("skin"),
                                    className: "cursor-pointer bg-sibel-blue rounded-[16px] flex items-center justify-center flex-col flex-1 h-[200px]",
                                    children: [(0, i.jsx)("img", {
                                        className: "h-[40px]",
                                        src: "./icons/activityskinicon.png"
                                    }), (0, i.jsx)("span", {
                                        className: "text-[22px] font-bold text-white",
                                        children: t("skin_to_skin")
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        6760: (e, s, t) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(5977)
            }])
        },
        8970: (e, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                default: () => l
            });
            let i = {
                    en: {
                        parent: "Parent",
                        days: "days",
                        growth: "Growth",
                        weight: "Weight",
                        length: "Length",
                        daily_report: "Daily report",
                        report1: "Weight gained",
                        report2: "New physical exam appointment scheduled",
                        title: "How is Emma doing today",
                        feed: "Feed",
                        tube: "Tube",
                        bottle: "Bottle",
                        breastfeeding: "Breastfeeding",
                        time: "time",
                        times: "times",
                        diaper: "Diaper",
                        changes_today: "changes today",
                        wet: "Wet",
                        dirty: "Dirty",
                        skin_to_skin: "Skin-to-Skin",
                        hours_ago: "hours ago",
                        kangaroo: "Kangaroo",
                        touching: "Touching",
                        hrs: "hrs",
                        min: "min",
                        body_temperature: "Body Temperature",
                        heart_rate: "Heart Rate",
                        beats_per_minute: "Beats per minute",
                        sp02: "Sp02",
                        breath_per_minute: "Breath per minute",
                        oxygen_level: "Oxygen level (%)",
                        milestone: "Emma’s Milestone",
                        mile1: "Extubation",
                        mile2: "Off IV fluids",
                        mile3: "No apnea\u2028bradycardia event",
                        mile4: "No extra oxygen",
                        mile5: "First time being held",
                        mile6: "First diaper change",
                        mile7: "First breastfeed",
                        notes: "Notes",
                        plan: "Plan",
                        glossary: "Glossary",
                        settings: "Settings",
                        manual_notes: "Manual Notes",
                        quick_notes: "Quick Notes",
                        quick1: "Who is involved in making health care decisions for my baby?",
                        save: "Save",
                        activity: "Activity",
                        frequently_asked_terms: "Frequently Asked Terms",
                        apgar_score: "Apgar Score",
                        faq1: "A quick assessment performed on a newborn at 1 and 5 minutes after birth to evaluate their physical condition and determine any immediate need for extra medical help.",
                        jaundice: "Jaundice",
                        faq2: "A condition caused by an excess of bilirubin in the bloodstream, leading to a yellowing of the skin and eyes in newborns.",
                        neonatal: "Neonatal",
                        umbilical_cord: "Umbilical Cord",
                        meconium: "Meconium",
                        circumcision: "Circumcision",
                        hyperbilirubinemia: "Hyperbilirubinemia",
                        language: "Language",
                        units: "Units",
                        french: "French",
                        english: "English",
                        inches: "Inches",
                        centimeter: "Centimeter",
                        pounds: "Pounds",
                        grams: "Grams",
                        ounces: "Ounces",
                        milliliters: "Milliliters",
                        success: "Success",
                        success_text: "Your update has been sent to Emma’s team",
                        minutes: "minutes",
                        left: "Left",
                        right: "Right",
                        breastfeed: "Breastfeed",
                        breast_milk: "Breast Milk",
                        donor_milk: "Donor Milk",
                        formula: "Formula",
                        diaper_ask: "Is the care team weighing Emma’s diaper?",
                        yes: "YES",
                        no: "NO",
                        mix: "Mix",
                        input_activity: "Input Activity"
                    },
                    fr: {
                        parent: "Parent",
                        days: "jours",
                        growth: "Croissance",
                        weight: "Poids",
                        length: "Taille",
                        daily_report: "Rapport Quotidien",
                        report1: "Prise de poids",
                        report2: "Nouveau rendez-vous pour un examen physique",
                        title: "Comment va Emma aujourd'hui?",
                        feed: "Nourrir",
                        tube: "Tube",
                        bottle: "Biberon",
                        breastfeeding: "Allaitement",
                        time: "time",
                        times: "fois",
                        diaper: "Couche",
                        changes_today: "changements aujourd'hui",
                        wet: "Mouill\xe9",
                        dirty: "Sale",
                        skin_to_skin: "Peau-\xe0-Peau",
                        hours_ago: "Il y a heures",
                        kangaroo: "Kangourou",
                        touching: "Contact",
                        hrs: "hrs",
                        min: "min",
                        body_temperature: "Temp\xe9rature Corporelle",
                        heart_rate: "Fr\xe9quence Cardiaque",
                        beats_per_minute: "Battements par minute",
                        spo2: "SpO2",
                        breath_per_minute: "Respirations par minute",
                        oxygen_level: "Taux d'oxyg\xe8ne (%)",
                        milestone: "L'\xe9tape cl\xe9 d'Emma",
                        mile1: "Extubation",
                        mile2: "Arr\xeat des fluides IV",
                        mile3: "Aucun \xe9v\xe9nement d'apn\xe9e bradycardie",
                        mile4: "Plus d'oxyg\xe8ne suppl\xe9mentaire",
                        mile5: "Premi\xe8re fois que l'on tient b\xe9b\xe9",
                        mile6: "Premier changement de couche",
                        mile7: "Premier allaitement",
                        notes: "Notes",
                        plan: "Plan",
                        glossary: "Glossaire",
                        settings: "Param\xe8tres",
                        manual_notes: "Notes Manuelles",
                        quick_notes: "Notes Rapides",
                        quick1: "Qui est impliqu\xe9 dans les d\xe9cisions concernant les soins de sant\xe9 \xe0 fournir \xe0 mon b\xe9b\xe9?",
                        save: "SAUVEGARDER",
                        activity: "Activit\xe9",
                        frequently_asked_terms: "Foire Aux Questions",
                        apgar_score: "Score d'Apgar",
                        faq1: "\xc9valuation rapide effectu\xe9e sur un nouveau-n\xe9 1 minute et 5 minutes apr\xe8s la naissance afin d'\xe9valuer son \xe9tat physique et de d\xe9terminer s'il a besoin d'une aide m\xe9dicale suppl\xe9mentaire de fa\xe7on imm\xe9diate.",
                        jaundice: "Jaunisse",
                        faq2: "Affection caus\xe9e par un exc\xe8s de bilirubine dans la circulation sanguine, entra\xeenant un jaunissement de la peau et des yeux chez les nouveau-n\xe9s.",
                        neonatal: "N\xe9onatal",
                        umbilical_cord: "Cordon Ombilical",
                        meconium: "M\xe9conium",
                        circumcision: "Circoncision",
                        hyperbilirubinemia: "Hyperbilirubin\xe9mie",
                        language: "Langue",
                        units: "Unit\xe9s",
                        french: "Fran\xe7ais",
                        english: "Anglais",
                        inches: "Pouces",
                        centimeter: "Centim\xe8tre",
                        pounds: "Livres",
                        grams: "Grammes",
                        ounces: "Onces",
                        milliliters: "Millilitres",
                        success: "Succ\xe8s",
                        success_text: "Votre mise \xe0 jour a \xe9t\xe9 envoy\xe9e \xe0 l'\xe9quipe d'Emma",
                        minutes: "minutes",
                        left: "gauche",
                        right: "droite",
                        breastfeed: "Allaiter",
                        breast_milk: "Lait maternel",
                        donor_milk: "Lait de donneuse",
                        formula: "formule",
                        diaper_ask: "L'\xe9quipe soignante p\xe8se-t-elle la couche d'Emma?",
                        yes: "OUI",
                        no: "NON",
                        mix: "M\xe9lange",
                        input_activity: "Ajouter Activit\xe9"
                    }
                },
                l = function(e) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en";
                    return console.log(e, s, i[s][e]), i[s][e]
                }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [636, 593, 792], () => s(6760)), _N_E = e.O()
    }
]);
