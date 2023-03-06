(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6], {
    49529: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/chat/[[...chatId]]", function() {
            return t(52227)
        }
        ])
    },
    52227: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            __N_SSP: function() {
                return rC
            },
            default: function() {
                return rj
            }
        });
        var r, a = t(35250), o = t(91530), i = t.n(o), s = t(61432), l = t(70079), u = t(73925), c = t(48240), d = t(12762), f = t(98943), m = t(62676), h = t(79876), g = t(31501), x = t(61079), v = t(59268), p = {
            showAccountPaymentModal: !1
        }, b = (0,
        v.ZP)()(function(e) {
            return (0,
            x.Z)((0,
            g.Z)({}, p), {
                setShowAccountPaymentModal: function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
                    e({
                        showAccountPaymentModal: n
                    }),
                    t && t()
                }
            })
        }), y = "oai/apps/hasSeenReleaseAnnouncement", C = "2023-02-10";
        function j(e) {
            var n = e.hasSeenOnboardingDate
              , t = e.userCountry
              , r = e.isUserPaid
              , o = e.canShowPaidAnnouncement
              , i = (0,
            l.useState)(!1)
              , s = i[0]
              , c = i[1];
            (0,
            l.useEffect)(function() {
                c(function() {
                    return !Boolean(m.m.getItem("".concat(y, "/").concat(C))) && !!n && n < new Date(C)
                })
            }, [n, r]);
            var h = (0,
            l.useCallback)(function() {
                m.m.setItem("".concat(y, "/").concat(C), !0),
                c(!1)
            }, [])
              , g = (0,
            d.WS)();
            (0,
            l.useEffect)(function() {
                s && g(f.s6.announcementViewed, {
                    content: C
                })
            }, [s, g]);
            var x = b(function(e) {
                return {
                    setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                    showAccountPaymentModal: e.showAccountPaymentModal
                }
            }).setShowAccountPaymentModal
              , v = (0,
            l.useCallback)(function() {
                x(!0, function() {
                    g(f.s6.clickModalAccountPaymentSecondaryButton)
                })
            }, [g, x])
              , p = (0,
            l.useCallback)(function() {
                m.m.setItem("".concat(y, "/").concat(C), !0),
                c(!1),
                v()
            }, [v]);
            return r ? (0,
            a.jsx)(u.Z, {
                size: "xs",
                isOpen: s,
                onModalClose: h,
                type: "success",
                title: "",
                primaryButton: (0,
                a.jsx)(u.m, {
                    title: "Close",
                    color: "neutral",
                    onClick: h
                }),
                children: (0,
                a.jsx)(w, {})
            }) : o && t ? (0,
            a.jsx)(u.Z, {
                size: "xs",
                isOpen: s,
                onModalClose: h,
                type: "success",
                title: "",
                primaryButton: (0,
                a.jsx)(u.m, {
                    title: "Learn more",
                    color: "primary",
                    onClick: p
                }),
                secondaryButton: (0,
                a.jsx)(u.m, {
                    title: "Close",
                    color: "neutral",
                    onClick: h
                }),
                children: (0,
                a.jsx)(k, {
                    userCountry: t
                })
            }) : null
        }
        var w = function() {
            return (0,
            a.jsxs)("div", {
                className: "mb-6 flex flex-col gap-6",
                children: [(0,
                a.jsx)("div", {
                    className: "text-gray-800 dark:text-white",
                    children: "Feb 13 update"
                }), (0,
                a.jsxs)("div", {
                    className: "flex items-center gap-2 text-2xl",
                    children: ["Turbo ", (0,
                    a.jsx)(h.ZP, {
                        icon: c.Rgz,
                        className: "inline"
                    }), "Default"]
                }), (0,
                a.jsx)("div", {
                    className: "prose text-base dark:prose-invert",
                    children: "Based on user feedback, we're defaulting you to a faster version of ChatGPT, previously know as Turbo. We'll keep the previous version around for a while."
                })]
            })
        }
          , k = function(e) {
            var n = e.userCountry;
            return (0,
            a.jsxs)("div", {
                className: "mb-6 flex flex-col gap-6",
                children: [(0,
                a.jsx)("div", {
                    className: "text-gray-800 dark:text-white",
                    children: "Feb 10 update"
                }), (0,
                a.jsxs)("div", {
                    className: "text-2xl",
                    children: ["ChatGPT Plus is available in ", (0,
                    a.jsx)("b", {
                        children: n
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "prose text-base dark:prose-invert",
                    children: [(0,
                    a.jsx)("div", {
                        className: "",
                        children: "Subscribers will receive:"
                    }), (0,
                    a.jsxs)("ul", {
                        children: [(0,
                        a.jsx)("li", {
                            children: "General access to ChatGPT, even during peak times"
                        }), (0,
                        a.jsx)("li", {
                            children: "Faster response times"
                        }), (0,
                        a.jsx)("li", {
                            children: "Priority access to new features and improvements"
                        })]
                    })]
                })]
            })
        }
          , Z = t(61706)
          , N = t(33861)
          , P = t(89874)
          , M = t(14806)
          , S = t(64705)
          , I = t(25769)
          , T = t(45813)
          , R = t(87093)
          , A = t(6128)
          , D = t(19841)
          , B = t(26649)
          , F = t.n(B)
          , E = t(11253)
          , L = t.n(E)
          , U = t(2827)
          , G = t(34303)
          , O = t(82018)
          , z = t(36613)
          , _ = t(68619)
          , q = t(60814)
          , H = t(66285)
          , V = t(27252)
          , W = t(57218)
          , J = t(11699)
          , K = t(80836);
        function $(e) {
            var n = e.id
              , t = e.label;
            return (0,
            a.jsxs)("div", {
                className: "form-check",
                children: [(0,
                a.jsx)("input", {
                    className: "form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
                    type: "checkbox",
                    value: "",
                    id: n
                }), (0,
                a.jsx)("label", {
                    className: "form-check-label inline-block text-gray-800 dark:text-gray-100",
                    htmlFor: n,
                    children: t
                })]
            })
        }
        var Y = t(35025)
          , Q = t(42928)
          , X = t(60612);
        function ee(e) {
            var n = e.text
              , t = e.onDone
              , r = (0,
            X.Z)()
              , o = (0,
            l.useState)(!0)
              , i = o[0]
              , s = o[1]
              , u = (0,
            l.useState)(0)
              , c = u[0]
              , d = u[1]
              , f = (0,
            l.useMemo)(function() {
                return new en().humanTypingDelaysQuertyDistance(n)
            }, [n]);
            return (0,
            l.useEffect)(function() {
                n && i && (s(!0),
                f.forEach(function(e, n) {
                    setTimeout(function() {
                        r() && (d(n),
                        n === f.length - 1 && (s(!1),
                        null == t || t()))
                    }, e)
                }))
            }, [f, r, i, t, n]),
            (0,
            a.jsxs)(a.Fragment, {
                children: [n.substring(0, c + 1), i && "▋"]
            })
        }
        var en = function() {
            function e() {
                (0,
                Y.Z)(this, e)
            }
            var n = e.prototype;
            return n.qwertyDistance = function(e, n) {
                var t, r, a, o = {
                    q: [0, 0],
                    w: [1, 0],
                    e: [2, 0],
                    r: [3, 0],
                    t: [4, 0],
                    y: [5, 0],
                    u: [6, 0],
                    i: [7, 0],
                    o: [8, 0],
                    p: [9, 0],
                    a: [0, 1],
                    s: [1, 1],
                    d: [2, 1],
                    f: [3, 1],
                    g: [4, 1],
                    h: [5, 1],
                    j: [6, 1],
                    k: [7, 1],
                    l: [8, 1],
                    z: [0, 2],
                    x: [1, 2],
                    c: [2, 2],
                    v: [3, 2],
                    b: [4, 2],
                    n: [5, 2],
                    m: [6, 2]
                }, i = (0,
                Q.Z)(null !== (t = o[e.toLowerCase()]) && void 0 !== t ? t : [0, 0], 2), s = i[0], l = i[1], u = (0,
                Q.Z)(null !== (r = o[n.toLowerCase()]) && void 0 !== r ? r : [0, 0], 2);
                return Math.abs(s - u[0]) + Math.abs(l - u[1])
            }
            ,
            n.humanTypingDelaysQuertyDistance = function(e) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = 0, a = [], o = 0; o < e.length; ++o) {
                    var i = void 0;
                    if (o > 0) {
                        var s = this.qwertyDistance(e[o - 1], e[o]);
                        i = 0 === s ? this.getRandomInt(n, Math.floor(t / 2)) : 1 === s ? this.getRandomInt(n, Math.floor(2 * t / 3)) : this.getRandomInt(n, t)
                    } else
                        i = this.getRandomInt(n, t);
                    a.push(i + r),
                    r += i
                }
                return a
            }
            ,
            n.getRandomInt = function(e, n) {
                return Math.floor(Math.random() * (n - e + 1)) + e
            }
            ,
            e
        }()
          , et = t(39690)
          , er = t(1744);
        function ea() {
            var e = (0,
            M.Z)(["flex flex-col gap-2 text-gray-100 text-sm\n", ""]);
            return ea = function() {
                return e
            }
            ,
            e
        }
        function eo() {
            var e = (0,
            M.Z)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n", "\n"]);
            return eo = function() {
                return e
            }
            ,
            e
        }
        function ei() {
            var e = (0,
            M.Z)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n", "\n"]);
            return ei = function() {
                return e
            }
            ,
            e
        }
        function es() {
            var e = (0,
            M.Z)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
            return es = function() {
                return e
            }
            ,
            e
        }
        function el() {
            var e = (0,
            M.Z)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative "]);
            return el = function() {
                return e
            }
            ,
            e
        }
        function eu() {
            var e = (0,
            M.Z)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
            return eu = function() {
                return e
            }
            ,
            e
        }
        function ec() {
            var e = (0,
            M.Z)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
            return ec = function() {
                return e
            }
            ,
            e
        }
        function ed() {
            var e = (0,
            M.Z)(["p-1 hover:text-white"]);
            return ed = function() {
                return e
            }
            ,
            e
        }
        var ef = W.G.href;
        function em(e) {
            var n = e.items
              , t = e.activeId
              , r = e.onNextPage
              , o = e.hasNextPage
              , i = e.onNewThread
              , s = e.onRefetchHistory
              , u = e.onUpdateUserModifiedTitle
              , c = e.userModifiedTitle
              , d = e.newChatName
              , f = e.isLoading
              , m = e.isError
              , h = (0,
            l.useRef)(null)
              , g = (0,
            l.useState)(!1)
              , x = g[0]
              , v = g[1]
              , p = (0,
            l.useCallback)(function() {
                v(!0),
                s()
            }, [s])
              , b = 0 === n.length;
            return (0,
            l.useEffect)(function() {
                h.current && h.current.scrollIntoView()
            }, []),
            (0,
            a.jsxs)(eh, {
                $centered: f || m && b,
                children: [b && f && (0,
                a.jsx)(er.Z, {
                    className: "m-auto"
                }), b && m && (0,
                a.jsxs)("div", {
                    className: "p-3 italic text-gray-500",
                    children: ["Unable to load history", !x && (0,
                    a.jsx)(et.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: p,
                        children: "Retry"
                    })]
                }), n.map(function(e) {
                    var n = t === e.id;
                    return (0,
                    a.jsx)(eg, {
                        id: e.id,
                        title: e.title,
                        newChatName: n ? d : void 0,
                        userModifiedTitle: n ? c : "",
                        onUpdateUserModifiedTitle: u,
                        active: n,
                        forwardRef: n ? h : void 0,
                        onNewThread: i,
                        onRefetchHistory: s
                    }, "Entry-".concat(e.id))
                }), o && (0,
                a.jsx)(et.z, {
                    as: "button",
                    onClick: r,
                    color: "dark",
                    className: "m-auto mb-2",
                    size: "small",
                    children: "Show more"
                })]
            })
        }
        var eh = G.Z.div(ea(), function(e) {
            return e.$centered && "h-full justify-center items-center"
        });
        function eg(e) {
            var n = e.id
              , t = e.title
              , r = e.active
              , o = e.onNewThread
              , u = e.onRefetchHistory
              , m = e.onUpdateUserModifiedTitle
              , g = e.newChatName
              , x = e.userModifiedTitle
              , v = e.forwardRef
              , p = (0,
            J.dD)()
              , b = (0,
            d.WS)()
              , y = (0,
            s.useRouter)()
              , C = (0,
            l.useState)(!1)
              , j = C[0]
              , w = C[1]
              , k = (0,
            l.useRef)(null)
              , Z = (0,
            l.useState)(!1)
              , N = Z[0]
              , P = Z[1]
              , M = (0,
            l.useState)()
              , S = M[0]
              , I = M[1]
              , T = (0,
            l.useCallback)(function(e) {
                var r, a;
                if (null == e || e.preventDefault(),
                w(!1),
                (null === (r = k.current) || void 0 === r ? void 0 : r.value) && (null === (a = k.current) || void 0 === a ? void 0 : a.value) !== t) {
                    var o = k.current.value;
                    q.ZP.patchConversation(n, {
                        title: o
                    }),
                    m(o),
                    b(f.s6.renameThread, {
                        threadId: n,
                        content: o
                    }),
                    u()
                }
            }, [b, n, u, m, t])
              , R = (0,
            l.useCallback)(function(e) {
                "Enter" === e.key && T()
            }, [T])
              , A = (0,
            l.useCallback)(function() {
                q.ZP.patchConversation(n, {
                    is_visible: !1
                }).then(function() {
                    u()
                }),
                y.asPath === ef ? o() : y.replace({
                    pathname: ef
                })
            }, [n, o, u, y])
              , B = (0,
            l.useCallback)(function(e) {
                e.preventDefault(),
                b(f.s6.loadThread, {
                    threadId: n
                }),
                y.push({
                    pathname: y.pathname,
                    query: {
                        chatId: n
                    }
                }, void 0, {
                    shallow: !0
                })
            }, [b, n, y])
              , F = x || r && g || t;
            if ((0,
            l.useEffect)(function() {
                r && g && g !== S && I(g)
            }, [r, g, F, S, x]),
            j)
                return (0,
                a.jsxs)(ev, {
                    $active: r,
                    children: [(0,
                    a.jsx)(h.ZP, {
                        icon: c.IC0,
                        className: "flex-shrink-0"
                    }), (0,
                    a.jsx)(ep, {
                        ref: k,
                        type: "text",
                        defaultValue: F,
                        autoFocus: !0,
                        onKeyDown: R,
                        className: "mr-0",
                        onBlur: T
                    }), (0,
                    a.jsxs)(eC, {
                        $active: !0,
                        children: [(0,
                        a.jsx)(ej, {
                            onClick: T,
                            children: (0,
                            a.jsx)(h.ZP, {
                                icon: c.UgA
                            })
                        }), (0,
                        a.jsx)(ej, {
                            onClick: function(e) {
                                e.preventDefault(),
                                w(!1)
                            },
                            children: (0,
                            a.jsx)(h.ZP, {
                                icon: c.q5L
                            })
                        })]
                    })]
                });
            var E = S && r && !p && !x
              , L = 'Delete "'.concat(F, '"?');
            return (0,
            a.jsxs)(ex, {
                onClick: r ? i() : B,
                $active: r,
                className: (0,
                D.Z)("group", E && "animate-flash"),
                ref: v,
                children: [(0,
                a.jsx)(h.ZP, {
                    icon: N ? c.Ybf : c.IC0
                }), (0,
                a.jsxs)(eb, {
                    children: [E ? (0,
                    a.jsx)(ee, {
                        text: F,
                        onDone: u
                    }) : N ? L : F, (!S || !r) && (0,
                    a.jsx)(ey, {
                        $active: r
                    })]
                }), N && (0,
                a.jsxs)(eC, {
                    $active: !0,
                    children: [(0,
                    a.jsx)(ej, {
                        onClick: A,
                        children: (0,
                        a.jsx)(h.ZP, {
                            icon: c.UgA
                        })
                    }), (0,
                    a.jsx)(ej, {
                        onClick: function() {
                            P(!1)
                        },
                        children: (0,
                        a.jsx)(h.ZP, {
                            icon: c.q5L
                        })
                    })]
                }), r && !N && (0,
                a.jsxs)(eC, {
                    $active: r,
                    children: [(0,
                    a.jsx)(ej, {
                        onClick: function(e) {
                            e.preventDefault(),
                            w(!0)
                        },
                        children: (0,
                        a.jsx)(h.ZP, {
                            icon: c.Nte
                        })
                    }), (0,
                    a.jsx)(ej, {
                        onClick: function() {
                            return P(!0)
                        },
                        children: (0,
                        a.jsx)(h.ZP, {
                            icon: c.Ybf
                        })
                    })]
                })]
            })
        }
        var ex = G.Z.a(eo(), function(e) {
            return e.$active ? "pr-14 bg-gray-800 hover:bg-gray-800" : "hover:pr-4"
        })
          , ev = G.Z.div(ei(), function(e) {
            return e.$active && "pr-14 bg-gray-800 hover:bg-gray-800"
        })
          , ep = G.Z.input(es())
          , eb = G.Z.div(el())
          , ey = G.Z.div(eu(), function(e) {
            return e.$active ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"
        })
          , eC = G.Z.div(ec(), function(e) {
            return e.$active ? "visible" : "invisible group-hover:visible"
        })
          , ej = G.Z.button(ed())
          , ew = t(40638)
          , ek = t(29634)
          , eZ = t(15762)
          , eN = t(54721)
          , eP = t.n(eN);
        function eM() {
            var e = (0,
            M.Z)(["flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"]);
            return eM = function() {
                return e
            }
            ,
            e
        }
        function eS() {
            var e = (0,
            M.Z)(["flex-col flex-1 overflow-y-auto border-b border-white/20\n", ""]);
            return eS = function() {
                return e
            }
            ,
            e
        }
        var eI = G.Z.a(eM())
          , eT = G.Z.div(eS(), function(e) {
            return e.$offsetScrollbar && "-mr-2"
        })
          , eR = W.G.href;
        function eA(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , o = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , u = e.showDeleteHistory
              , m = e.onNewThread
              , g = e.onOpenDebugPanel
              , x = e.settings
              , v = e.children
              , p = (0,
            d.WS)()
              , b = (0,
            eZ.F)()
              , y = b.theme
              , C = b.setTheme
              , j = (0,
            X.Z)()
              , w = (0,
            H.hz)()
              , k = (0,
            s.useRouter)()
              , Z = (0,
            l.useRef)(null)
              , N = (0,
            l.useState)(!1)
              , P = N[0]
              , M = N[1]
              , S = (0,
            l.useState)(!1)
              , I = S[0]
              , T = S[1]
              , R = (0,
            l.useMemo)(function() {
                var e;
                return (null === (e = k.query.chatId) || void 0 === e ? void 0 : e[0]) ? (0,
                a.jsx)(eP(), {
                    href: eR,
                    children: (0,
                    a.jsxs)(eI, {
                        className: "mb-2 flex-shrink-0 border border-white/20",
                        children: [(0,
                        a.jsx)(h.ZP, {
                            icon: c.OvN
                        }), "New chat"]
                    })
                }, "Page-reset") : (0,
                a.jsxs)(eI, {
                    onClick: m,
                    className: "mb-2 flex-shrink-0 border border-white/20",
                    children: [(0,
                    a.jsx)(h.ZP, {
                        icon: c.OvN
                    }), "New chat"]
                })
            }, [m, k.query.chatId])
              , A = (0,
            l.useCallback)(function() {
                p(f.s6.clickFaqLink)
            }, [p]);
            (0,
            l.useEffect)(function() {
                if (Z.current) {
                    var e;
                    M((e = Z.current).scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
                }
            }, [v]);
            var D = (0,
            V.g)(function(e) {
                return e.flags.highlightPlusUpgrade
            })
              , B = (0,
            l.useCallback)(function() {
                T(!1),
                i()
            }, [i]);
            return (0,
            a.jsx)("div", {
                className: "scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20",
                children: (0,
                a.jsxs)("nav", {
                    className: "flex h-full flex-1 flex-col space-y-1 p-2",
                    children: [R, (0,
                    a.jsx)(eT, {
                        ref: Z,
                        $offsetScrollbar: P,
                        children: v
                    }), u && (0,
                    a.jsxs)(eI, {
                        onClick: function() {
                            return C("dark" === y ? "light" : "dark")
                        },
                        children: [(0,
                        a.jsx)(h.ZP, {
                            icon: "dark" === y ? c.kXG : c.wOW
                        }), "dark" === y ? "Light" : "Dark", " mode"]
                    }), o && r && (0,
                    a.jsxs)(eI, {
                        onClick: r,
                        children: [(0,
                        a.jsx)(h.ZP, {
                            icon: c.fzv
                        }), "My account"]
                    }), (0,
                    a.jsxs)(eI, {
                        href: "https://help.openai.com/en/collections/3742473-chatgpt",
                        target: "_blank",
                        onClick: A,
                        children: [(0,
                        a.jsx)(h.ZP, {
                            icon: c.AlO
                        }), "Updates & FAQ"]
                    }), x, (0,
                    a.jsxs)
                ]


                })
            })
        }
        var eD = function(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , o = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , s = e.showDeleteHistory
              , l = e.onNewThread
              , u = e.onOpenDebugPanel
              , c = e.settings
              , d = e.children;
            return (0,
            a.jsx)("div", {
                className: "dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col",
                children: (0,
                a.jsx)("div", {
                    className: "flex h-full min-h-0 flex-col ",
                    children: (0,
                    a.jsx)(eA, {
                        onClickAccountPayment: n,
                        showAccountPaymentMenuItem: t,
                        onClickCustomerPortal: r,
                        showCustomerPortalMenuItem: o,
                        onDeleteHistory: i,
                        showDeleteHistory: s,
                        onNewThread: l,
                        onOpenDebugPanel: u,
                        settings: c,
                        children: d
                    })
                })
            })
        }
          , eB = function(e) {
            var n = e.onClickAccountPayment
              , t = e.showAccountPaymentMenuItem
              , r = e.onClickCustomerPortal
              , o = e.showCustomerPortalMenuItem
              , i = e.onDeleteHistory
              , s = e.onSidebarOpen
              , u = e.sidebarOpen
              , d = e.showDeleteHistory
              , f = e.onNewThread
              , m = e.onOpenDebugPanel
              , g = e.children
              , x = e.settings;
            return (0,
            a.jsx)(ew.u.Root, {
                show: u,
                as: l.Fragment,
                children: (0,
                a.jsxs)(ek.V, {
                    as: "div",
                    className: "relative z-40 md:hidden",
                    onClose: s,
                    children: [(0,
                    a.jsx)(ew.u.Child, {
                        as: l.Fragment,
                        enter: "transition-opacity ease-linear duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-opacity ease-linear duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0,
                        a.jsx)("div", {
                            className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "fixed inset-0 z-40 flex",
                        children: [(0,
                        a.jsx)(ew.u.Child, {
                            as: l.Fragment,
                            enter: "transition ease-in-out duration-300 transform",
                            enterFrom: "-translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            leaveFrom: "translate-x-0",
                            leaveTo: "-translate-x-full",
                            children: (0,
                            a.jsxs)(ek.V.Panel, {
                                className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                                children: [(0,
                                a.jsx)(ew.u.Child, {
                                    as: l.Fragment,
                                    enter: "ease-in-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in-out duration-300",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "absolute top-0 right-0 -mr-12 pt-2",
                                        children: (0,
                                        a.jsxs)("button", {
                                            type: "button",
                                            className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                            onClick: function() {
                                                return s(!1)
                                            },
                                            children: [(0,
                                            a.jsx)("span", {
                                                className: "sr-only",
                                                children: "Close sidebar"
                                            }), (0,
                                            a.jsx)(h.ZP, {
                                                icon: c.q5L,
                                                size: "medium",
                                                className: "text-white",
                                                "aria-hidden": "true"
                                            })]
                                        })
                                    })
                                }), (0,
                                a.jsx)(eA, {
                                    onClickAccountPayment: n,
                                    showAccountPaymentMenuItem: t,
                                    onClickCustomerPortal: r,
                                    showCustomerPortalMenuItem: o,
                                    onDeleteHistory: i,
                                    showDeleteHistory: d,
                                    onNewThread: f,
                                    onOpenDebugPanel: m,
                                    settings: x,
                                    children: g
                                })]
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "w-14 flex-shrink-0"
                        })]
                    })]
                })
            })
        }
          , eF = function(e) {
            var n = e.onSidebarOpen
              , t = e.onNewThread
              , r = e.title
              , o = e.newChatName
              , i = (0,
            l.useState)()
              , u = i[0]
              , d = i[1]
              , f = (0,
            s.useRouter)()
              , m = (0,
            l.useMemo)(function() {
                var e;
                return (null === (e = f.query.chatId) || void 0 === e ? void 0 : e[0]) ? (0,
                a.jsx)(eP(), {
                    href: eR,
                    children: (0,
                    a.jsx)("button", {
                        type: "button",
                        className: "px-3",
                        children: (0,
                        a.jsx)(h.ZP, {
                            icon: c.OvN,
                            size: "medium"
                        })
                    })
                }, "Page-reset") : (0,
                a.jsx)("button", {
                    type: "button",
                    className: "px-3",
                    onClick: t,
                    children: (0,
                    a.jsx)(h.ZP, {
                        icon: c.OvN,
                        size: "medium"
                    })
                })
            }, [t, f.query.chatId]);
            return (0,
            l.useEffect)(function() {
                o !== u && d(o)
            }, [o, u]),
            (0,
            a.jsxs)("div", {
                className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
                children: [(0,
                a.jsxs)("button", {
                    type: "button",
                    className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                    onClick: function() {
                        return n(!0)
                    },
                    children: [(0,
                    a.jsx)("span", {
                        className: "sr-only",
                        children: "Open sidebar"
                    }), (0,
                    a.jsx)(h.ZP, {
                        icon: c.cur,
                        "aria-hidden": "true",
                        size: "medium"
                    })]
                }), (0,
                a.jsx)("h1", {
                    className: "flex-1 text-center text-base font-normal",
                    children: u && o ? (0,
                    a.jsx)(ee, {
                        text: o
                    }) : r || "New chat"
                }), m]
            })
        }
          , eE = t(500);
        function eL() {
            var e = (0,
            M.Z)(["flex flex-row gap-2 mb-4"]);
            return eL = function() {
                return e
            }
            ,
            e
        }
        function eU() {
            var e = (0,
            M.Z)(["bg-gray-200 rounded-md text-gray-500 text-xs flex flex-row items-center gap-1 px-2 py-1"]);
            return eU = function() {
                return e
            }
            ,
            e
        }
        function eG() {
            var e = (0,
            M.Z)(["flex items-center gap-1"]);
            return eG = function() {
                return e
            }
            ,
            e
        }
        function eO() {
            var e = (0,
            M.Z)([""]);
            return eO = function() {
                return e
            }
            ,
            e
        }
        var ez = function(e) {
            var n = e.urls
              , t = e.onRemoveUrl
              , r = e.clickable
              , o = e.className;
            return 0 === n.size ? null : (0,
            a.jsx)(e_, {
                className: o,
                children: Array.from(n).map(function(e) {
                    return (0,
                    a.jsxs)(eq, {
                        children: [(0,
                        a.jsx)(c.XKb, {}), (0,
                        a.jsxs)(eH, (0,
                        x.Z)((0,
                        g.Z)({}, r ? {
                            href: e,
                            target: "_blank",
                            disabled: !1
                        } : {
                            disabled: !0
                        }), {
                            children: [new URL(e).hostname, r && (0,
                            a.jsx)(c.AlO, {})]
                        })), t && (0,
                        a.jsx)(eV, {
                            onClick: function() {
                                return t(e)
                            },
                            children: (0,
                            a.jsx)(c.q5L, {})
                        })]
                    }, e)
                })
            })
        }
          , e_ = G.Z.div(eL())
          , eq = G.Z.div(eU())
          , eH = G.Z.a(eG())
          , eV = G.Z.button(eO())
          , eW = l.memo(ez);
        function eJ() {
            var e = (0,
            M.Z)(["\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n", "\n"]);
            return eJ = function() {
                return e
            }
            ,
            e
        }
        function eK() {
            var e = (0,
            M.Z)(["\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n", ""]);
            return eK = function() {
                return e
            }
            ,
            e
        }
        function e$() {
            var e = (0,
            M.Z)(["flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"]);
            return e$ = function() {
                return e
            }
            ,
            e
        }
        function eY(e) {
            var n = e.onAbortCompletion
              , t = e.onCreateNewCompletion
              , r = e.onUpdateArtifactStatus
              , o = e.onRequestMoreCompletions
              , i = e.onContinueGenerating
              , s = e.artifact
              , u = e.currentLeafId
              , m = e.currentRequestId
              , v = e.threadId
              , p = e.isCompletionInProgress
              , b = e.className
              , y = e.placeholder
              , C = e.currentPrompt
              , j = e.onChangeCurrentPrompt
              , w = e.clearOnSubmit
              , k = void 0 === w || w
              , N = e.disabled
              , P = void 0 !== N && N
              , M = e.shouldRetry
              , S = e.canPause
              , I = void 0 !== S && S
              , R = e.canContinue
              , A = void 0 !== R && R
              , B = "root" === u
              , F = (0,
            J.dD)()
              , E = (0,
            d.WS)()
              , L = (0,
            l.useContext)(eE.g).serviceStatus
              , G = (0,
            l.useMemo)(function() {
                return new Set([])
            }, [])
              , O = (0,
            l.useRef)(null)
              , z = (0,
            l.useState)("")
              , _ = z[0]
              , q = z[1]
              , H = (0,
            l.useCallback)(function(e) {
                r({
                    state: "pasted",
                    url: e,
                    id: e,
                    contents: ""
                }),
                q("")
            }, [r])
              , V = (0,
            l.useCallback)(function(e) {
                j(e.currentTarget.value)
            }, [j])
              , W = (0,
            l.useCallback)(function(e) {
                if (null == e || e.preventDefault(),
                !P) {
                    var n, a, o = null === (n = O.current) || void 0 === n ? void 0 : n.value, i = "".concat(null === (a = O.current) || void 0 === a ? void 0 : a.dataset.id, "-nextPrompt");
                    if (o || (null == s ? void 0 : s.url)) {
                        var l = (null == s ? void 0 : s.url) || "";
                        (null == s ? void 0 : s.state) === "pasted" && r(function(e) {
                            return (0,
                            x.Z)((0,
                            g.Z)({}, e), {
                                state: "static"
                            })
                        });
                        var u = (null == s ? void 0 : s.state) === "pasted" ? {
                            artifacts: [null == s ? void 0 : s.url]
                        } : {};
                        t(i, (0,
                        g.Z)({
                            value: o || ""
                        }, u), {
                            eventSource: e ? "mouse" : "keyboard"
                        }, l),
                        k && j(""),
                        q(""),
                        (0,
                        U.SI)(1, O.current)
                    }
                }
            }, [null == s ? void 0 : s.state, null == s ? void 0 : s.url, k, P, t, r, j, ])
              , K = (0,
            l.useCallback)((0,
            Z.Z)(function() {
                var e, n, t, r;
                return (0,
                T.__generator)(this, function(a) {
                    switch (a.label) {
                    case 0:
                        if (!G.has("link") || "root" !== u)
                            return [2];
                        return [4, navigator.clipboard.readText()];
                    case 1:
                        return n = a.sent(),
                        t = /^https?:\/\/[^\s]+/g,
                        (r = null === (e = n.match(t)) || void 0 === e ? void 0 : e[0]) && q(r),
                        [2]
                    }
                })
            }), [G, u])
              , $ = (0,
            l.useCallback)(function() {
                r(null)
            }, [r])
              , Y = (0,
            l.useCallback)(function() {
                n("", m),
                o(u, {
                    eventSource: "mouse"
                })
            }, [u, m, n, o, ])
              , Q = (0,
            l.useCallback)(function() {
                n("", m),
                E(f.s6.pauseCompletion, {
                    threadId: v,
                    eventSource: "mouse"
                })
            }, [m, v, E, n])
              , X = (0,
            l.useMemo)(function() {
                return {
                    Enter: {
                        validator: function() {
                            return !P
                        },
                        handler: function(e) {
                            F || e.shiftKey || e.isComposing || (e.preventDefault(),
                            p || W())
                        }
                    },
                    Escape: {
                        validator: function() {
                            return I && p
                        },
                        handler: function() {
                            n("", m),
                            E(f.s6.pauseCompletion, {
                                threadId: v,
                                eventSource: "keyboard"
                            })
                        }
                    }
                }
            }, [P, F, p, W, I, n, m, E, v, ]);
            (0,
            l.useEffect)(function() {
                var e = O.current
                  , n = function(e) {
                    var n;
                    (null === (n = X[e.key]) || void 0 === n ? void 0 : n.validator(e)) && X[e.key].handler(e)
                };
                return e && e.addEventListener("keydown", n),
                function() {
                    e && e.removeEventListener("keydown", n)
                }
            }, [X]),
            (0,
            l.useEffect)(function() {
                var e = O.current
                  , n = function(n) {
                    !(null == e ? void 0 : e.value) && _ && B && (n.preventDefault(),
                    H(_))
                };
                return G.has("link") && e && B && e.addEventListener("paste", n),
                function() {
                    e && e.removeEventListener("paste", n)
                }
            }, [H, u, B, r, _, G, ]),
            (0,
            l.useEffect)(function() {
                return window.addEventListener("focus", K),
                function() {
                    window.removeEventListener("focus", K)
                }
            }, [K]),
            (0,
            l.useEffect)(function() {
                var e;
                null === (e = O.current) || void 0 === e || e.focus()
            }, []);
            var ee = !B && !p && !(null == L ? void 0 : L.oof)
              , en = (0,
            l.useCallback)(function() {
                i(u)
            }, [u, i])
              , er = (0,
            l.useMemo)(function() {
                return (0,
                a.jsxs)(e1, {
                    className: (0,
                    D.Z)(M && "m-auto flex-col items-center"),
                    children: [M && (0,
                    a.jsx)("span", {
                        className: "mb-3 block text-xs md:mb-auto",
                        children: "There was an error generating a response"
                    }), ee && (0,
                    a.jsxs)(et.z, {
                        as: "button",
                        color: M ? "primary" : "neutral",
                        onClick: Y,
                        className: (0,
                        D.Z)(M ? "m-auto" : "border-0 md:border"),
                        children: [(0,
                        a.jsx)(h.ZP, {
                            icon: c.Qxo,
                            size: F ? "small" : "xsmall"
                        }), (!F || M) && "Regenerate response"]
                    }), A && (0,
                    a.jsxs)(et.z, {
                        as: "button",
                        color: "neutral",
                        onClick: en,
                        className: "border-0 md:border",
                        children: [(0,
                        a.jsx)(h.ZP, {
                            icon: c.lV_,
                            className: "-rotate-180",
                            size: F ? "small" : "xsmall"
                        }), !F && "Continue generating"]
                    }), I && p && (0,
                    a.jsxs)(et.z, {
                        as: "button",
                        color: "neutral",
                        onClick: Q,
                        className: "border-0 md:border",
                        children: [(0,
                        a.jsx)(h.ZP, {
                            icon: c.jxP,
                            size: F ? "small" : "xsmall"
                        }), !F && "Stop generating"]
                    })]
                })
            }, [A, I, ee, Q, Y, en, p, F, M, ]);
            return (0,
            a.jsx)("form", {
                className: b,
                onSubmit: W,
                children: (0,
                a.jsxs)("div", {
                    className: "relative flex h-full flex-1 md:flex-col",
                    children: [!F && er, !M && (0,
                    a.jsxs)(eX, {
                        $disabled: M,
                        children: [(null == s ? void 0 : s.state) === "pasted" && (0,
                        a.jsx)(eW, {
                            urls: new Set([s.url]),
                            onRemoveUrl: $,
                            className: "ml-2"
                        }), (0,
                        a.jsx)(U.ZP, {
                            tabIndex: 0,
                            onFocus: K,
                            value: C,
                            "data-id": u,
                            ref: O,
                            style: {
                                maxHeight: "200px"
                            },
                            rows: 1,
                            onChange: V,
                            placeholder: y,
                            className: "m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0",
                            disabled: M
                        }), (0,
                        a.jsx)(e0, {
                            disabled: p || M || P,
                            $nudgeBottom: p,
                            children: p ? (0,
                            a.jsx)("div", {
                                className: "text-2xl",
                                children: (0,
                                a.jsx)(eQ, {})
                            }) : (0,
                            a.jsx)(h.ZP, {
                                icon: c.LbG,
                                size: "small",
                                className: "mr-1"
                            })
                        })]
                    }), F && er]
                })
            })
        }
        function eQ() {
            var e = (0,
            l.useState)(0)
              , n = e[0]
              , t = e[1];
            (0,
            l.useEffect)(function() {
                var e = setInterval(function() {
                    t(function(e) {
                        return (e + 1) % 3
                    })
                }, 350);
                return function() {
                    return clearInterval(e)
                }
            }, []);
            for (var r = [], o = 0; o < 3; o++)
                r.push((0,
                a.jsx)("span", {
                    className: o <= n ? "" : "invisible",
                    children: "\xb7"
                }, o));
            return (0,
            a.jsx)(a.Fragment, {
                children: r
            })
        }
        var eX = G.Z.div(eJ(), function(e) {
            return e.$disabled && "bg-gray-100"
        })
          , e0 = G.Z.button(eK(), function(e) {
            return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1"
        })
          , e1 = G.Z.div(e$())
          , e2 = t(46275);
        function e3(e) {
            var n = e.children
              , t = e.title
              , r = e.icon
              , o = e.sidebarOpen
              , i = e.onSidebarOpen;
            return (0,
            a.jsx)(ew.u.Root, {
                show: o,
                as: l.Fragment,
                children: (0,
                a.jsxs)(ek.V, {
                    as: "div",
                    className: "relative z-10",
                    onClose: i,
                    children: [(0,
                    a.jsx)("div", {
                        className: "fixed inset-0"
                    }), (0,
                    a.jsx)("div", {
                        className: "fixed inset-0 overflow-hidden",
                        children: (0,
                        a.jsx)("div", {
                            className: "absolute inset-0 overflow-hidden",
                            children: (0,
                            a.jsx)("div", {
                                className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                                children: (0,
                                a.jsx)(ew.u.Child, {
                                    as: l.Fragment,
                                    enter: "transform transition ease-in-out duration-100 sm:duration-300",
                                    enterFrom: "translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transform transition ease-in-out duration-300 sm:duration-500",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "translate-x-full",
                                    children: (0,
                                    a.jsx)(ek.V.Panel, {
                                        className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                                        children: (0,
                                        a.jsxs)("div", {
                                            className: "flex h-full flex-col overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "",
                                                children: (0,
                                                a.jsxs)("div", {
                                                    className: "flex items-start justify-between",
                                                    children: [(0,
                                                    a.jsxs)(ek.V.Title, {
                                                        className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                                                        children: [(0,
                                                        a.jsx)(h.ZP, {
                                                            icon: r
                                                        }), t]
                                                    }), (0,
                                                    a.jsx)("div", {
                                                        className: "mr-2 mt-2 flex h-7 items-center",
                                                        children: (0,
                                                        a.jsxs)("button", {
                                                            type: "button",
                                                            className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                                                            onClick: function() {
                                                                return i(!1)
                                                            },
                                                            children: [(0,
                                                            a.jsx)("span", {
                                                                className: "sr-only",
                                                                children: "Close panel"
                                                            }), (0,
                                                            a.jsx)(h.ZP, {
                                                                icon: c.q5L,
                                                                size: "medium",
                                                                "aria-hidden": "true"
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "relative flex-1",
                                                children: n
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })]
                })
            })
        }
        var e6 = t(1215);
        function e5() {
            var e = (0,
            M.Z)(["bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"]);
            return e5 = function() {
                return e
            }
            ,
            e
        }
        var e4 = G.Z.span(e5())
          , e8 = t(97374)
          , e7 = t.n(e8)
          , e9 = t(23119)
          , ne = t(95182)
          , nn = t.n(ne);
        function nt() {
            var e = (0,
            M.Z)(["text-xs flex items-center justify-center gap-1"]);
            return nt = function() {
                return e
            }
            ,
            e
        }
        function nr() {
            var e = (0,
            M.Z)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
            return nr = function() {
                return e
            }
            ,
            e
        }
        function na() {
            var e = (0,
            M.Z)(["flex-grow flex-shrink-0"]);
            return na = function() {
                return e
            }
            ,
            e
        }
        function no(e) {
            var n = e.currentPage
              , t = e.onChangeIndex
              , r = e.length
              , o = e.className
              , i = function(e) {
                t(nn()(n + e, 0, r - 1))
            };
            return (0,
            a.jsxs)(ni, {
                className: o,
                children: [(0,
                a.jsx)(ns, {
                    onClick: function() {
                        return i(-1)
                    },
                    disabled: 0 === n,
                    children: (0,
                    a.jsx)(h.ZP, {
                        size: "xsmall",
                        icon: c.YFh
                    })
                }), (0,
                a.jsx)(nl, {
                    children: "".concat(n + 1, " / ").concat(r)
                }), (0,
                a.jsx)(ns, {
                    onClick: function() {
                        return i(1)
                    },
                    disabled: n === r - 1,
                    children: (0,
                    a.jsx)(h.ZP, {
                        size: "xsmall",
                        icon: c.Tfp
                    })
                })]
            })
        }
        var ni = G.Z.div(nt())
          , ns = G.Z.button(nr())
          , nl = G.Z.span(na())
          , nu = t(38886);
        function nc(e) {
            var n = e.messages
              , t = e.isCompletionInProgress
              , r = n.reduce(function(e, n) {
                return n.err ? e : e + K.Cv.getTextFromMessage(n.message)
            }, "")
              , o = n.filter(function(e) {
                return e.errCode === z.Dd
            })
              , i = o.some(function(e) {
                return "danger" === e.errType
            });
            return (0,
            a.jsx)(nu.C, {
                text: r,
                format: !0,
                flag: o.length > 0 && (i ? "danger" : "warning"),
                isCompletionInProgress: t,
                showContentPolicyViolation: o.length > 0
            })
        }
        var nd = t(62588);
        function nf() {
            var e = (0,
            M.Z)(["w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100"]);
            return nf = function() {
                return e
            }
            ,
            e
        }
        function nm() {
            var e = (0,
            M.Z)(["flex flex-grow flex-col gap-3"]);
            return nm = function() {
                return e
            }
            ,
            e
        }
        function nh() {
            var e = (0,
            M.Z)(["text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"]);
            return nh = function() {
                return e
            }
            ,
            e
        }
        function ng() {
            var e = (0,
            M.Z)(["w-[30px] flex flex-col relative items-end"]);
            return ng = function() {
                return e
            }
            ,
            e
        }
        function nx() {
            var e = (0,
            M.Z)(["p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"]);
            return nx = function() {
                return e
            }
            ,
            e
        }
        function nv() {
            var e = (0,
            M.Z)(["text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n", ""]);
            return nv = function() {
                return e
            }
            ,
            e
        }
        function np() {
            var e = (0,
            M.Z)(["text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs"]);
            return np = function() {
                return e
            }
            ,
            e
        }
        var nb, ny = e7()(function() {
            return t.e(328).then(t.bind(t, 63328))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [63328]
                }
            },
            ssr: !1
        }), nC = e7()(function() {
            return t.e(736).then(t.bind(t, 98736))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [98736]
                }
            },
            ssr: !1
        }), nj = e7()(function() {
            return t.e(24).then(t.bind(t, 6024))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [6024]
                }
            },
            ssr: !1
        }), nw = e7()(function() {
            return t.e(672).then(t.bind(t, 37672))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [37672]
                }
            },
            ssr: !1
        }), nk = e7()(function() {
            return t.e(201).then(t.bind(t, 20201))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [20201]
                }
            },
            ssr: !1
        });
        function nZ(e) {
            var n, t;
            return !(null === (n = e.message.recipient) || void 0 === n ? void 0 : n.includes(".")) && (null === (t = e.message.recipient) || void 0 === t ? void 0 : t.slice(2, 3)) === "n"
        }
        function nN(e) {
            var n, t, r;
            return !(null === (n = e.message.recipient) || void 0 === n ? void 0 : n.includes(".")) && ((null === (t = e.message.recipient) || void 0 === t ? void 0 : t.slice(2, 3)) === "o" || (null === (r = e.message.recipient) || void 0 === r ? void 0 : r.slice(2, 3)) === "s")
        }
        function nP(e) {
            var n, t;
            return !("o" !== e.message.content.content_type.slice(1, 2) && ((null === (n = e.message.recipient) || void 0 === n ? void 0 : n.includes(".")) || (null === (t = e.message.recipient) || void 0 === t ? void 0 : t.slice(2, 3)) !== "t" || "text" !== e.message.content.content_type))
        }
        function nM(e) {
            return "e" === e.message.content.content_type.slice(2, 3)
        }
        function nS(e) {
            var n, t, r = (null === (n = e.message.author) || void 0 === n ? void 0 : n.name) || (null === (t = e.message.user) || void 0 === t ? void 0 : t.name);
            return !(null == r ? void 0 : r.includes(".")) && ((null == r ? void 0 : r.slice(2, 3)) === "n" || (null == r ? void 0 : r.slice(2, 3)) === "o" || (null == r ? void 0 : r.slice(2, 3)) === "s")
        }
        function nI(e) {
            var n;
            return K.Cv.getRoleFromMessage(e.message) === _.uU.Assistant && (null === (n = e.message.recipient) || void 0 === n ? void 0 : n.includes("."))
        }
        function nT(e) {
            return K.Cv.getRoleFromMessage(e.message) === _.uU.Tool && !nS(e) && !nM(e)
        }
        (nb = r || (r = {}))[nb.Text = 0] = "Text",
        nb[nb.MultiText = 1] = "MultiText",
        nb[nb.SB = 2] = "SB",
        nb[nb.B = 3] = "B",
        nb[nb.C = 4] = "C",
        nb[nb.CEO = 5] = "CEO",
        nb[nb.P = 6] = "P";
        var nR = l.memo(function(e) {
            var n = e.turn
              , t = e.threadId
              , o = e.treeRef
              , i = e.onChangeItemInView
              , s = e.onChangeRating
              , u = (e.onCreateNewNode,
            e.onDeleteNode)
              , m = e.onRequestCompletion
              , x = e.onUpdateNode
              , v = e.activeRequests
              , p = n.role
              , b = n.messages
              , y = n.variantIds
              , C = (0,
            l.useState)(b)
              , j = C[0]
              , w = C[1]
              , k = W.G.theme
              , Z = k.color
              , N = k.icon
              , P = k.activeColor
              , M = (0,
            O.kP)().session
              , S = (0,
            J.Ui)()
              , I = (0,
            d.WS)()
              , T = (0,
            l.useState)(!1)
              , R = T[0]
              , A = T[1]
              , B = (0,
            l.useMemo)(function() {
                return y.findIndex(function(e) {
                    return e === j[0].nodeId
                })
            }, [y, j])
              , F = p !== _.uU.User
              , E = j[j.length - 1]
              , L = (0,
            l.useState)(E.rating)
              , U = L[0]
              , G = L[1]
              , z = (0,
            H.hz)()
              , q = (0,
            nd.Z)().installedPlugins
              , V = (0,
            l.useCallback)(function() {
                1 === j.length && (I(p === _.uU.User ? f.s6.editPrompt : f.s6.editCompletion, {
                    id: j[0].message.id,
                    threadId: t
                }),
                A(!0))
            }, [j, I, p, t])
              , $ = (0,
            l.useCallback)(function() {
                A(!1)
            }, [])
              , Y = (0,
            l.useCallback)(function(e) {
                s(E.nodeId, E.message.id, e),
                G(e)
            }, [E, s]);
            (0,
            l.useEffect)(function() {
                G(E.rating)
            }, [E]),
            (0,
            l.useEffect)(function() {
                w(b)
            }, [b]);
            var Q = (0,
            l.useMemo)(function() {
                return K.Cv.getRequestIdFromConversationTurn(n)
            }, [n])
              , X = "CompletionUpdated:".concat(j[j.length - 1].nodeId)
              , ee = (0,
            l.useCallback)(function(e, n) {
                var t = n.nodeId;
                w(function(e) {
                    var n = []
                      , r = !0
                      , a = !1
                      , i = void 0;
                    try {
                        for (var s, l = e[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
                            var u = s.value;
                            if (u.nodeId === t) {
                                var c = o.current.getNode(t);
                                n.push((0,
                                g.Z)({
                                    nodeId: t,
                                    parentId: c.parentId,
                                    message: c.message
                                }, c.metadata))
                            } else
                                n.push(u)
                        }
                    } catch (d) {
                        a = !0,
                        i = d
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return n
                })
            }, [o]);
            (0,
            l.useEffect)(function() {
                return PubSub.subscribe(X, ee),
                function() {
                    PubSub.unsubscribe(X)
                }
            }, [ee, X]);
            var en = (0,
            l.useMemo)(function() {
                return v.has(Q)
            }, [v, Q])
              , et = (0,
            l.useMemo)(function() {
                var e = !0
                  , n = !1
                  , t = void 0;
                try {
                    for (var r, a = j[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
                        var o = r.value;
                        if (o.errType)
                            return o.errType
                    }
                } catch (i) {
                    n = !0,
                    t = i
                } finally {
                    try {
                        e || null == a.return || a.return()
                    } finally {
                        if (n)
                            throw t
                    }
                }
                return !1
            }, [j])
              , er = (0,
            l.useMemo)(function() {
                if (F) {
                    var e, n = o.current.getParentPromptNode(j[0].nodeId).parentId, t = n && (null === (e = o.current.getNode(n).message.metadata) || void 0 === e ? void 0 : e.model_slug), r = (null == j ? void 0 : j[0]) && K.Cv.getModelFromMessage(null == j ? void 0 : j[0].message);
                    if (r && t && r !== t)
                        return "The previous model used in this conversation is unavailable. We've switched you to the latest default model"
                }
                return null
            }, [F, j, o])
              , ea = (0,
            l.useMemo)(function() {
                if (!z.has("tools") && !z.has("tools2"))
                    return {
                        avatarIcon: N,
                        avatarColor: Z
                    };
                if (en && j.length > 0) {
                    var e = j[j.length - 1];
                    if (nZ(e) || nN(e) || nS(e))
                        return {
                            avatarIcon: "s",
                            avatarColor: P
                        };
                    if (nP(e) || nM(e))
                        return {
                            avatarIcon: "c",
                            avatarColor: P
                        };
                    if (nI(e) || nT(e)) {
                        var n = nI(e) ? e.message.recipient : e.message.author.name
                          , t = null == n ? void 0 : n.split(".")[0]
                          , r = q.find(function(e) {
                            return e.manifest.name_for_model === t
                        });
                        return r ? {
                            avatarPlugin: r
                        } : {
                            avatarIcon: "p",
                            avatarColor: P
                        }
                    } else if (K.Cv.getIsTextTypeFromMessage(e.message) && (K.Cv.getTextFromMessage(e.message).length > 0 || j.length > 1))
                        return {
                            avatarIcon: "t",
                            avatarColor: P
                        }
                }
                return {
                    avatarIcon: N,
                    avatarColor: Z
                }
            }, [z, en, j, N, Z, P, q, ])
              , eo = ea.avatarIcon
              , ei = ea.avatarColor
              , es = ea.avatarPlugin
              , el = (0,
            l.useCallback)(function(e, n) {
                var t = o.current.getParentId(e);
                o.current.addNode(n, "", t, _.Jq.Prompt)
            }, [o])
              , eu = (0,
            l.useMemo)(function() {
                var e = [];
                return j.forEach(function(n, t) {
                    var a = null == j ? void 0 : j[t - 1]
                      , o = a && (K.Cv.getIsIncompleteFromMessage(a.message) || K.Cv.getIsContinuedFromMessage(a.message))
                      , i = K.Cv.getIsContinuedFromMessage(n.message)
                      , s = K.Cv.getIsTextTypeFromMessage(n.message) && K.Cv.getTextFromMessage(n.message);
                    if (o && i && s) {
                        var l = e.pop();
                        (null == l ? void 0 : l.type) === r.MultiText ? (l.messages.push(n),
                        e.push(l)) : (null == l ? void 0 : l.type) === r.Text && e.push({
                            type: r.MultiText,
                            messages: [l.message, n]
                        })
                    } else if (nZ(n) || nN(n) || nS(n)) {
                        var u = e[e.length - 1];
                        (null == u ? void 0 : u.type) === r.SB || (null == u ? void 0 : u.type) === r.B ? u.messages.push(n) : e.push({
                            type: nZ(n) ? r.SB : r.B,
                            messages: [n]
                        })
                    } else if (nI(n) || nT(n)) {
                        var c = e[e.length - 1];
                        nT(n) && (null == c ? void 0 : c.type) === r.P ? c.messages.push(n) : e.push({
                            type: r.P,
                            messages: [n]
                        })
                    } else {
                        var d = r.Text;
                        nP(n) ? d = r.C : nM(n) && (d = r.CEO),
                        e.push({
                            type: d,
                            message: n
                        })
                    }
                }),
                e.map(function(n, o) {
                    var s = o === e.length - 1;
                    switch (n.type) {
                    case r.Text:
                        return (0,
                        a.jsx)(nu.Z, {
                            className: "min-h-[20px]",
                            message: n.message,
                            isEditing: R,
                            format: F,
                            isCompletionInProgress: s && en,
                            onCreateEditNode: el,
                            threadId: t,
                            onUpdateNode: x,
                            onDeleteNode: u,
                            onChangeItemInView: i,
                            onRequestCompletion: m,
                            onExitEdit: $,
                            disabled: 0 !== v.size
                        }, n.message.nodeId);
                    case r.MultiText:
                        return (0,
                        a.jsx)(nc, {
                            messages: n.messages,
                            isCompletionInProgress: s && en
                        }, o);
                    case r.SB:
                        if (!z.has("tools"))
                            return null;
                        return (0,
                        a.jsx)(ny, {
                            messages: n.messages
                        }, n.messages[0].nodeId);
                    case r.B:
                        if (!z.has("tools"))
                            return null;
                        return (0,
                        a.jsx)(nC, {
                            messages: n.messages,
                            isComplete: !s
                        }, n.messages[0].nodeId);
                    case r.C:
                        if (!z.has("tools2"))
                            return null;
                        var l = e[o + 1]
                          , c = l && l.type === r.CEO ? l.message : void 0;
                        return (0,
                        a.jsx)(nj, {
                            message: n.message,
                            outputMessage: c
                        }, n.message.nodeId);
                    case r.CEO:
                        if (!z.has("tools2"))
                            return null;
                        return (0,
                        a.jsx)(nw, {
                            message: n.message,
                            isCollapsed: !1
                        }, n.message.nodeId);
                    case r.P:
                        if (!z.has("tools3"))
                            return null;
                        return (0,
                        a.jsx)(nk, {
                            messages: n.messages
                        }, n.messages[0].nodeId);
                    default:
                        return null
                    }
                })
            }, [j, R, F, en, el, t, x, u, i, m, $, v.size, z, ]);
            return (0,
            a.jsxs)(nA, {
                className: (0,
                D.Z)("group", F ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"),
                children: [er && (0,
                a.jsx)(nU, {
                    children: er
                }), (0,
                a.jsxs)(nB, {
                    children: [(0,
                    a.jsxs)(nF, {
                        children: [F ? es ? (0,
                        a.jsx)(e9.Ph, {
                            plugin: es,
                            notice: et || void 0
                        }) : (0,
                        a.jsx)(e9.k$, {
                            background: ei,
                            iconName: eo,
                            notice: et || void 0
                        }) : (0,
                        a.jsx)(e9.Yt, {
                            user: null == M ? void 0 : M.user,
                            notice: et || void 0
                        }), y.length > 1 && !S && (0,
                        a.jsx)(no, {
                            currentPage: B,
                            onChangeIndex: function(e) {
                                return i(y[e])
                            },
                            length: y.length,
                            className: "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible"
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]",
                        children: [(0,
                        a.jsx)(nD, {
                            children: eu
                        }), !F && 1 === j.length && !R && (0,
                        a.jsx)(nL, {
                            $hidden: 0 !== v.size,
                            children: (0,
                            a.jsx)(nE, {
                                onClick: V,
                                className: "md:invisible md:group-hover:visible",
                                children: (0,
                                a.jsx)(h.ZP, {
                                    icon: c.vPQ
                                })
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [y.length > 1 && S && (0,
                            a.jsx)(no, {
                                currentPage: B,
                                onChangeIndex: function(e) {
                                    return i(y[e])
                                },
                                length: y.length,
                                className: "self-center pt-2"
                            }), F && (0,
                            a.jsxs)(nL, {
                                $hidden: en,
                                children: ["thumbsDown" !== U && (0,
                                a.jsx)(nE, {
                                    onClick: function() {
                                        return Y("thumbsUp")
                                    },
                                    disabled: "thumbsUp" === U,
                                    className: (0,
                                    D.Z)("thumbsUp" === U && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
                                    children: (0,
                                    a.jsx)(h.ZP, {
                                        icon: c.fmn
                                    })
                                }, "thumbsUp:".concat(E.nodeId)), "thumbsUp" !== U && (0,
                                a.jsx)(nE, {
                                    onClick: function() {
                                        return Y("thumbsDown")
                                    },
                                    disabled: "thumbsDown" === U,
                                    className: (0,
                                    D.Z)("thumbsDown" === U && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
                                    children: (0,
                                    a.jsx)(h.ZP, {
                                        icon: c.oLd
                                    })
                                }, "thumbsDown:".concat(E.nodeId))]
                            })]
                        })]
                    })]
                })]
            })
        })
          , nA = G.Z.div(nf())
          , nD = G.Z.div(nm())
          , nB = G.Z.div(nh())
          , nF = G.Z.div(ng())
          , nE = G.Z.button(nx())
          , nL = G.Z.div(nv(), function(e) {
            return e.$hidden ? "invisible" : "visible"
        })
          , nU = G.Z.div(np())
          , nG = t(20212)
          , nO = t(44819)
          , nz = e7()(function() {
            return t.e(854).then(t.bind(t, 1854))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [1854]
                }
            },
            ssr: !1
        });
        function n_(e) {
            var n, t = e.onChangeModelSetting, r = e.availableModels, o = e.modelBackend, i = (0,
            H.hz)(), s = (0,
            l.useMemo)(function() {
                return r.find(function(e) {
                    return e.id === o
                })
            }, [r, o]);
            return (0,
            a.jsxs)("div", {
                className: "flex items-center justify-center gap-2",
                children: [(0,
                a.jsx)(nq, {
                    onChangeModelSetting: t,
                    availableModels: r,
                    modelBackend: o
                }), i.has("tools3") && (null == s ? void 0 : null === (n = s.enabledTools) || void 0 === n ? void 0 : n.includes("tools3")) && (0,
                a.jsx)(nz, {})]
            })
        }
        function nq(e) {
            var n = e.onChangeModelSetting
              , t = e.availableModels
              , r = e.modelBackend
              , o = (0,
            d.WS)()
              , i = (0,
            l.useCallback)(function(e) {
                n(nO.G3.Model, e.id),
                o(f.s6.toggleModel, {
                    model: e.id
                })
            }, [o, n])
              , s = t.map(function(e) {
                return {
                    value: e,
                    title: e.title,
                    description: e.description,
                    tags: e.tags
                }
            })
              , u = s.find(function(e) {
                return e.value.id === r
            }) || s[0];
            return (0,
            a.jsx)(nG.ZP, {
                name: "Model",
                selectedOption: u,
                options: s,
                onChange: i
            })
        }
        var nH = function(e) {
            var n = e.modelBackend
              , t = e.availableModels
              , r = t.find(function(e) {
                return e.id === n
            }) || t[0]
              , o = r.tags.filter(function(e) {
                return nG.D2.includes(e)
            }).map(function(e) {
                return (0,
                nG.Vp)(e)
            });
            return (0,
            a.jsxs)("div", {
                className: "flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
                children: ["Model: ", r.title, o]
            })
        }
          , nV = t(75318);
        function nW() {
            var e = (0,
            M.Z)(["text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
            return nW = function() {
                return e
            }
            ,
            e
        }
        function nJ() {
            var e = (0,
            M.Z)(["text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"]);
            return nJ = function() {
                return e
            }
            ,
            e
        }
        function nK() {
            var e = (0,
            M.Z)(["md:flex items-start text-center gap-3.5"]);
            return nK = function() {
                return e
            }
            ,
            e
        }
        function n$() {
            var e = (0,
            M.Z)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
            return n$ = function() {
                return e
            }
            ,
            e
        }
        function nY() {
            var e = (0,
            M.Z)(["flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
            return nY = function() {
                return e
            }
            ,
            e
        }
        function nQ() {
            var e = (0,
            M.Z)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
            return nQ = function() {
                return e
            }
            ,
            e
        }
        function nX() {
            var e = (0,
            M.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
            return nX = function() {
                return e
            }
            ,
            e
        }
        function n0() {
            var e = (0,
            M.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
            return n0 = function() {
                return e
            }
            ,
            e
        }
        function n1() {
            var e = (0,
            M.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
            return n1 = function() {
                return e
            }
            ,
            e
        }
        var n2 = G.Z.div(nW())
          , n3 = G.Z.h1(nJ())
          , n6 = G.Z.div(nK())
          , n5 = G.Z.div(n$())
          , n4 = G.Z.h2(nY())
          , n8 = G.Z.ul(nQ())
          , n7 = G.Z.li(nX());
        G.Z.li(n0());
        var n9 = G.Z.button(n1());
        function te(e) {
            var n = e.text
              , t = e.onChangeCurrentPrompt
              , r = (0,
            l.useCallback)(function() {
                t(n)
            }, [n, t]);
            return (0,
            a.jsxs)(n9, {
                onClick: r,
                children: ['"', n, '" →']
            })
        }
        function tn(e) {
            var n = e.onChangeCurrentPrompt
              , t = (0,
            H.nR)();
            return (0,
            a.jsxs)(n2, {
                children: [(0,
                a.jsxs)(n3, {
                    children: ["ChatGPT", t && (0,
                    a.jsx)(e4, {
                        children: "Plus"
                    })]
                }), (0,
                a.jsxs)(n6, {
                    children: [(0,
                    a.jsxs)(n5, {
                        children: [(0,
                        a.jsxs)(n4, {
                            children: [(0,
                            a.jsx)(h.ZP, {
                                icon: c.kXG,
                                size: "medium"
                            }), "Examples"]
                        }), (0,
                        a.jsxs)(n8, {
                            children: [(0,
                            a.jsx)(te, {
                                text: "Explain quantum computing in simple terms",
                                onChangeCurrentPrompt: n
                            }), (0,
                            a.jsx)(te, {
                                text: "Got any creative ideas for a 10 year old’s birthday?",
                                onChangeCurrentPrompt: n
                            }), (0,
                            a.jsx)(te, {
                                text: "How do I make an HTTP request in Javascript?",
                                onChangeCurrentPrompt: n
                            })]
                        })]
                    }), (0,
                    a.jsxs)(n5, {
                        children: [(0,
                        a.jsxs)(n4, {
                            children: [(0,
                            a.jsx)(h.ZP, {
                                icon: nV.Z,
                                size: "medium"
                            }), "Capabilities"]
                        }), (0,
                        a.jsxs)(n8, {
                            children: [(0,
                            a.jsx)(n7, {
                                children: "Remembers what user said earlier in the conversation"
                            }), (0,
                            a.jsx)(n7, {
                                children: "Allows user to provide follow-up corrections"
                            }), (0,
                            a.jsx)(n7, {
                                children: "Trained to decline inappropriate requests"
                            })]
                        })]
                    }), (0,
                    a.jsxs)(n5, {
                        children: [(0,
                        a.jsxs)(n4, {
                            children: [(0,
                            a.jsx)(h.ZP, {
                                icon: c.BJv,
                                size: "medium"
                            }), "Limitations"]
                        }), (0,
                        a.jsxs)(n8, {
                            children: [(0,
                            a.jsx)(n7, {
                                children: "May occasionally generate incorrect information"
                            }), (0,
                            a.jsx)(n7, {
                                children: "May occasionally produce harmful instructions or biased content"
                            }), (0,
                            a.jsx)(n7, {
                                children: "Limited knowledge of world and events after 2021"
                            })]
                        })]
                    })]
                })]
            })
        }
        function tt() {
            var e = (0,
            M.Z)(["flex flex-col items-center text-sm  dark:bg-gray-800"]);
            return tt = function() {
                return e
            }
            ,
            e
        }
        function tr() {
            var e = (0,
            M.Z)(["w-full h-32 md:h-48 flex-shrink-0"]);
            return tr = function() {
                return e
            }
            ,
            e
        }
        function ta() {
            var e = (0,
            M.Z)(["cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"]);
            return ta = function() {
                return e
            }
            ,
            e
        }
        function to() {
            var e = (0,
            M.Z)(["px-2 py-10 relative w-full flex flex-col h-full"]);
            return to = function() {
                return e
            }
            ,
            e
        }
        function ti() {
            var e = (0,
            M.Z)(["text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"]);
            return ti = function() {
                return e
            }
            ,
            e
        }
        function ts(e) {
            var n = e.conversationTurns
              , t = e.onChangeItemInView
              , r = e.onCreateNewNode
              , o = e.onUpdateNode
              , i = e.onChangeRating
              , s = e.onDeleteNode
              , u = e.onRequestCompletion
              , d = e.onChangeCurrentPrompt
              , f = e.threadId
              , m = e.treeRef
              , g = e.activeRequests
              , x = e.isProcessingArtifact
              , v = e.isLoading
              , p = e.onChangeModelSetting
              , b = e.availableModels
              , y = e.currentThreadModel
              , C = e.canShowThreadSettings
              , j = (0,
            e6.useScrollToBottom)()
              , w = (0,
            Q.Z)((0,
            e6.useSticky)(), 1)[0]
              , k = (0,
            X.Z)()
              , Z = n.length < 2
              , N = C && Z && !v
              , P = (0,
            H.nR)()
              , M = (0,
            l.useState)(!1)
              , S = M[0]
              , I = M[1]
              , T = (0,
            nO.ZP)(b, y).modelBackend;
            return (0,
            l.useEffect)(function() {
                v ? setTimeout(function() {
                    k() && I(!0)
                }, 1e3) : I(!1)
            }, [v, k]),
            (0,
            a.jsxs)(a.Fragment, {
                children: [N && (0,
                a.jsxs)(td, {
                    children: [(0,
                    a.jsx)(n_, {
                        onChangeModelSetting: p,
                        availableModels: b,
                        modelBackend: T
                    }), (0,
                    a.jsxs)(tf, {
                        children: ["ChatGPT", P && (0,
                        a.jsx)(e4, {
                            children: "Plus"
                        })]
                    })]
                }), (0,
                a.jsxs)(tl, {
                    children: [Z && !v && !C && (0,
                    a.jsx)(tn, {
                        onChangeCurrentPrompt: d
                    }), S && v && (0,
                    a.jsx)(er.Z, {
                        className: "mx-auto mt-4"
                    }), !Z && !v && C && (0,
                    a.jsx)(nH, {
                        availableModels: b,
                        modelBackend: T
                    }), n.map(function(e, n) {
                        return e.role === _.uU.Unknown || e.role === _.uU.System ? null : (0,
                        a.jsx)(nR, {
                            turn: e,
                            threadId: f,
                            treeRef: m,
                            onChangeItemInView: t,
                            onChangeRating: i,
                            onCreateNewNode: r,
                            onDeleteNode: s,
                            onRequestCompletion: u,
                            onUpdateNode: o,
                            activeRequests: g
                        }, n)
                    }), !N && (0,
                    a.jsx)(tu, {})]
                }), x && (0,
                a.jsx)(er.Z, {
                    className: "mx-auto mt-4"
                }), !w && (0,
                a.jsx)(tc, {
                    onClick: j,
                    children: (0,
                    a.jsx)(h.ZP, {
                        icon: c.tv1,
                        className: "m-1"
                    })
                })]
            })
        }
        var tl = G.Z.div(tt())
          , tu = G.Z.div(tr())
          , tc = G.Z.button(ta())
          , td = G.Z.div(to())
          , tf = G.Z.h1(ti())
          , tm = e7()(function() {
            return Promise.resolve().then(t.bind(t, 1215))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [1215]
                }
            },
            ssr: !1
        });
        function th(e) {
            var n = e.children;
            return (0,
            a.jsx)(tm, {
                className: (0,
                D.Z)("h-full dark:bg-gray-800"),
                followButtonClassName: "scroll-convo",
                initialScrollBehavior: "auto",
                children: n
            })
        }
        function tg() {
            var e = (0,
            M.Z)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
            return tg = function() {
                return e
            }
            ,
            e
        }
        function tx() {
            var e = (0,
            M.Z)(["w-10 text-2xl text-center"]);
            return tx = function() {
                return e
            }
            ,
            e
        }
        function tv() {
            var e = (0,
            M.Z)(["flex-1 leading-5"]);
            return tv = function() {
                return e
            }
            ,
            e
        }
        function tp() {
            var e = (0,
            M.Z)(["flex gap-4 mt-6"]);
            return tp = function() {
                return e
            }
            ,
            e
        }
        function tb(e) {
            var n = e.icon
              , t = e.children;
            return (0,
            a.jsxs)(ty, {
                children: [(0,
                a.jsx)(tC, {
                    children: n
                }), (0,
                a.jsx)(tj, {
                    children: t
                })]
            })
        }
        var ty = G.Z.div(tg())
          , tC = G.Z.div(tx())
          , tj = G.Z.div(tv());
        function tw(e) {
            var n = e.onBack
              , t = e.onNext
              , r = e.onSubmit;
            return (0,
            a.jsxs)(tk, {
                children: [n && (0,
                a.jsx)(et.z, {
                    as: "button",
                    color: "neutral",
                    onClick: n,
                    children: "Back"
                }), t && (0,
                a.jsx)(et.z, {
                    as: "button",
                    onClick: t,
                    color: "neutral",
                    className: "ml-auto",
                    children: "Next"
                }), r && (0,
                a.jsx)(et.z, {
                    as: "button",
                    onClick: r,
                    color: "primary",
                    className: "ml-auto",
                    children: "Done"
                })]
            })
        }
        var tk = G.Z.div(tp());
        function tZ() {
            var e = (0,
            M.Z)(["prose dark:prose-invert"]);
            return tZ = function() {
                return e
            }
            ,
            e
        }
        function tN() {
            var e = (0,
            M.Z)(["!mt-4 font-normal !mb-2"]);
            return tN = function() {
                return e
            }
            ,
            e
        }
        function tP() {
            var e = (0,
            M.Z)(["mb-4"]);
            return tP = function() {
                return e
            }
            ,
            e
        }
        function tM() {
            var e = (0,
            M.Z)(["w-full h-[1px] bg-gray-300 opacity-20"]);
            return tM = function() {
                return e
            }
            ,
            e
        }
        function tS() {
            var e = (0,
            M.Z)(["flex gap-4 flex-col text-sm"]);
            return tS = function() {
                return e
            }
            ,
            e
        }
        var tI = "oai/apps/hasSeenOnboarding"
          , tT = W.G.id
          , tR = W.G.name
          , tA = function() {
            var e = (0,
            l.useCallback)(function() {
                m.m.setItem("".concat(tI, "/").concat(tT), new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }))
            }, [])
              , n = (0,
            l.useState)(null)
              , t = n[0]
              , r = n[1];
            (0,
            l.useEffect)(function() {
                r(m.m.getItem("".concat(tI, "/").concat(tT)))
            }, [r]);
            var a = (0,
            l.useCallback)(function() {
                return t ? new Date(!0 === t ? "2022-12-14" : t) : t
            }, [t]);
            return (0,
            l.useMemo)(function() {
                return {
                    setHasSeenOnboarding: e,
                    getHasSeenOnboardingDate: a
                }
            }, [a, e])
        };
        function tD(e) {
            var n = e.onClose
              , t = tA().setHasSeenOnboarding
              , r = (0,
            l.useState)(0)
              , o = r[0]
              , i = r[1]
              , s = (0,
            l.useCallback)(function() {
                n(!0),
                t()
            }, [n, t]);
            return (0,
            a.jsxs)(tU, {
                children: [0 === o && (0,
                a.jsx)(tF, {
                    onChangePage: i
                }), 1 === o && (0,
                a.jsx)(tE, {
                    onChangePage: i
                }), 2 === o && (0,
                a.jsx)(tL, {
                    onChangePage: i,
                    onSubmit: s
                })]
            })
        }
        var tB = function() {
            return "chat" === tT ? (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "mb-5",
                    children: (0,
                    a.jsx)(tG, {
                        children: (0,
                        a.jsx)("b", {
                            children: tR
                        })
                    })
                }), (0,
                a.jsx)(tz, {})]
            }) : (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(tG, {
                    children: ["Welcome to ", (0,
                    a.jsx)("b", {
                        children: tR
                    })]
                }), (0,
                a.jsx)("p", {
                    children: "Here are a few things to keep in mind before we get started:"
                }), (0,
                a.jsx)(tz, {})]
            })
        }
          , tF = function(e) {
            var n = e.onChangePage;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(tB, {}), (0,
                a.jsx)(tO, {
                    children: "This is a free research preview."
                }), (0,
                a.jsxs)(t_, {
                    children: [(0,
                    a.jsx)(tb, {
                        icon: "\uD83D\uDD2C",
                        children: "Our goal is to get external feedback in order to improve our systems and make them safer."
                    }), (0,
                    a.jsx)(tb, {
                        icon: "\uD83D\uDEA8",
                        children: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice."
                    })]
                }), (0,
                a.jsx)(tw, {
                    onNext: function() {
                        return n(1)
                    }
                })]
            })
        }
          , tE = function(e) {
            var n = e.onChangePage;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(tB, {}), (0,
                a.jsx)(tO, {
                    children: "How we collect data"
                }), (0,
                a.jsxs)(t_, {
                    children: [(0,
                    a.jsx)(tb, {
                        icon: "\uD83E\uDDBE",
                        children: "Conversations may be reviewed by our AI trainers to improve our systems."
                    }), (0,
                    a.jsx)(tb, {
                        icon: "\uD83D\uDD10",
                        children: "Please don't share any sensitive information in your conversations."
                    })]
                }), (0,
                a.jsx)(tw, {
                    onBack: function() {
                        return n(0)
                    },
                    onNext: function() {
                        return n(2)
                    }
                })]
            })
        }
          , tL = function(e) {
            var n = e.onChangePage
              , t = e.onSubmit
              , r = (0,
            l.useRef)(null);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(tB, {}), (0,
                a.jsx)(tO, {
                    children: "We'd love your feedback!"
                }), (0,
                a.jsxs)(t_, {
                    children: [(0,
                    a.jsx)(tb, {
                        icon: "\uD83D\uDC4D",
                        children: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful."
                    }), (0,
                    a.jsxs)(tb, {
                        icon: "\uD83D\uDCAC",
                        children: ["Share your feedback in our", " ", (0,
                        a.jsx)("a", {
                            href: "https://discord.gg/openai",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Discord server"
                        }), "."]
                    })]
                }), (0,
                a.jsx)(tw, {
                    onBack: function() {
                        return n(1)
                    },
                    onSubmit: function() {
                        return null == t ? void 0 : t(r)
                    }
                })]
            })
        }
          , tU = G.Z.div(tZ())
          , tG = G.Z.h2(tN())
          , tO = G.Z.h4(tP())
          , tz = G.Z.div(tM())
          , t_ = G.Z.div(tS())
          , tq = t(24058)
          , tH = t(74516)
          , tV = t(35e3)
          , tW = t(69858)
          , tJ = t(77507);
        function tK(e) {
            var n = e.isOpen
              , t = e.onClose
              , r = (0,
            l.useRef)(null)
              , o = (0,
            d.WS)()
              , i = (0,
            l.useState)(!1)
              , u = i[0]
              , m = i[1]
              , h = (0,
            s.useRouter)()
              , g = (0,
            l.useCallback)(function() {
                o(f.s6.closeAccountPaymentModal),
                t()
            }, [t, o])
              , x = (0,
            l.useCallback)((0,
            Z.Z)(function() {
                var e;
                return (0,
                T.__generator)(this, function(n) {
                    switch (n.label) {
                    case 0:
                        m(!0),
                        o(f.s6.clickAccountCustomerPortal),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, 4, 5]),
                        [4, q.ZP.fetchCustomerPortalUrl()];
                    case 2:
                        return e = n.sent(),
                        h.push(e.url),
                        [3, 5];
                    case 3:
                        return n.sent(),
                        tH.m.warning("The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.", {
                            hasCloseButton: !0
                        }),
                        [3, 5];
                    case 4:
                        return m(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }), [h, o, m]);
            return (0,
            a.jsxs)(tV.x, {
                isOpen: n,
                onClose: t,
                focusRef: r,
                children: [(0,
                a.jsxs)("div", {
                    className: "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
                    children: [(0,
                    a.jsx)("span", {
                        className: "text-base font-semibold sm:text-base",
                        children: "Your Account"
                    }), (0,
                    a.jsx)("button", {
                        className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                        onClick: g,
                        children: (0,
                        a.jsx)(c.q5L, {
                            className: "h-6 w-6"
                        })
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "grid",
                    children: (0,
                    a.jsx)("div", {
                        className: "relative order-1 col-span-1 sm:order-2",
                        children: (0,
                        a.jsx)(tW.Oi, {
                            rowElements: [(0,
                            a.jsx)(tW.Cu, {
                                text: tJ.S.plus.name,
                                children: (0,
                                a.jsx)("span", {
                                    className: "font-semibold text-gray-500",
                                    children: tJ.S.plus.costInDollars
                                })
                            }, "row-plus-plan-name"), (0,
                            a.jsx)(tW.hi, {
                                disabled: !0,
                                variant: "primary-disabled",
                                ref: r,
                                text: tJ.S.plus.callToAction.active
                            }, "row-plus-plan-button"), (0,
                            a.jsx)(tW.G, {
                                text: tJ.S.plus.demandAccess
                            }, "row-plus-plan-demand"), (0,
                            a.jsx)(tW.G, {
                                text: tJ.S.plus.responseSpeed
                            }, "row-plus-plan-speed"), (0,
                            a.jsx)(tW.G, {
                                className: "sm:pb-1",
                                text: tJ.S.plus.modelFeatures
                            }, "row-plus-plan-feathers"), (0,
                            a.jsx)(tW.nR, {
                                className: "sm:pb-1",
                                isLoading: u,
                                text: tJ.S.manageSubscription.callToAction,
                                onClick: x
                            }, "row-plus-plan-manage"), ]
                        })
                    })
                })]
            })
        }
        var t$ = t(86885)
          , tY = t(35873)
          , tQ = t(77064);
        function tX() {
            var e = (0,
            M.Z)(["h-[37px] py-2.5 px-6 text-xs uppercase text-gray-700 font-medium border-y relative"]);
            return tX = function() {
                return e
            }
            ,
            e
        }
        function t0() {
            var e = (0,
            M.Z)(["relative py-1 px-6 text-xs uppercase text-gray-700 font-medium bg-gray-100 border-y"]);
            return t0 = function() {
                return e
            }
            ,
            e
        }
        G.Z.h3(tX());
        var t1 = G.Z.h3(t0());
        function t2() {
            var e = (0,
            M.Z)(["overflow-y-auto h-full"]);
            return t2 = function() {
                return e
            }
            ,
            e
        }
        function t3() {
            var e = (0,
            M.Z)(["whitespace-pre-wrap text-sm"]);
            return t3 = function() {
                return e
            }
            ,
            e
        }
        function t6() {
            var e = (0,
            M.Z)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200"]);
            return t6 = function() {
                return e
            }
            ,
            e
        }
        function t5() {
            var e = (0,
            M.Z)(["absolute top-1/2 -translate-y-1/2 right-6"]);
            return t5 = function() {
                return e
            }
            ,
            e
        }
        function t4(e) {
            var n = e.treeRef
              , t = e.currentLeafId
              , r = (0,
            l.useState)()
              , o = r[0]
              , i = r[1]
              , s = (0,
            l.useMemo)(function() {
                return n.current.getBranchFromLeaf(t).filter(function(e) {
                    return e.type !== _.Jq.Root
                }).map(function(e) {
                    return e.message
                })
            }, [n, t])
              , c = (0,
            l.useCallback)(function() {
                i(void 0)
            }, [])
              , d = (0,
            l.useCallback)(function() {
                navigator.clipboard.writeText(n.current.getTextFromThread(t))
            }, [n, t])
              , f = s.map(function(e, n) {
                var t = K.Cv.getRoleFromMessage(e)
                  , r = K.Cv.getNameFromMessage(e);
                return (0,
                a.jsxs)(t9, {
                    role: "button",
                    onClick: function() {
                        return i(n)
                    },
                    children: [(0,
                    a.jsxs)("div", {
                        className: "text-xs font-medium uppercase text-gray-400",
                        children: [t, t !== r && " (".concat(r, ")"), " -> ", K.Cv.getRecipientFromMessage(e)]
                    }), (0,
                    a.jsx)("div", {
                        children: K.Cv.getTextFromMessage(e)
                    })]
                }, e.id)
            });
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(t8, {
                    children: [(0,
                    a.jsxs)(t1, {
                        children: ["Conversation messages", (0,
                        a.jsx)(re, {
                            children: (0,
                            a.jsx)(tQ.$, {
                                label: (0,
                                a.jsx)(tQ.u, {
                                    text: "Copy conversation text to clipboard"
                                }),
                                children: (0,
                                a.jsx)(tY.Z, {
                                    onCopy: d
                                })
                            })
                        })]
                    }), (0,
                    a.jsx)(t7, {
                        children: f
                    })]
                }), void 0 !== o && (0,
                a.jsx)(u.Z, {
                    isOpen: !0,
                    onModalClose: c,
                    type: "success",
                    children: (0,
                    a.jsx)("pre", {
                        className: "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                        children: JSON.stringify(s[o], null, 2)
                    })
                }, "DebugMessageModal-".concat(o))]
            })
        }
        var t8 = G.Z.div(t2())
          , t7 = G.Z.pre(t3())
          , t9 = G.Z.div(t6())
          , re = G.Z.div(t5())
          , rn = t(30331)
          , rt = t(87762)
          , rr = t(32329)
          , ra = t(89678)
          , ro = t.n(ra)
          , ri = t(39400)
          , rs = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i, /\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i, /\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i, ];
        function rl() {
            var e = (0,
            M.Z)(["overflow-hidden w-full h-full relative"]);
            return rl = function() {
                return e
            }
            ,
            e
        }
        function ru() {
            var e = (0,
            M.Z)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
            return ru = function() {
                return e
            }
            ,
            e
        }
        function rc() {
            var e = (0,
            M.Z)(["grow flex-1 overflow-hidden"]);
            return rc = function() {
                return e
            }
            ,
            e
        }
        function rd() {
            var e = (0,
            M.Z)(["absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient"]);
            return rd = function() {
                return e
            }
            ,
            e
        }
        var rf = "oai/apps/hasSeenHistoryRestored"
          , rm = W.G.href
          , rh = function(e) {
            var n, t, r, o, v, p, y, C, j, w, k, M, B, E, G, W, Y, Q, X, ee, en, et, er, ea, eo, ei, es, el, eu, ec, ed, ef, eh, eg, ex, ev, ep, eb, ey, eC, ej = e.initialData, ew = e.features, ek = e.isLoading, eZ = (0,
            s.useRouter)(), eN = (0,
            J.dD)(), eP = (0,
            d.WS)(), eM = (0,
            rr.n)(), eS = (0,
            l.useState)(), eT = eS[0], eR = eS[1], eA = (0,
            l.useState)(), eE = eA[0], eL = eA[1], eU = (0,
            l.useRef)(null), eG = (0,
            l.useRef)(ej.threadId || ""), eO = (0,
            H.nR)(), ez = (0,
            V.g)(function(e) {
                return e.flags.isUserInCanPayGroup
            }), e_ = (0,
            O.kP)().session, eq = null == e_ ? void 0 : e_.accessToken, eH = (r = (t = {
                enabled: Boolean(q.ZP.accessToken || eq),
                accessToken: q.ZP.accessToken || eq
            }).enabled,
            o = t.accessToken,
            y = (p = (0,
            ri.N)({
                queryKey: ["conversations"],
                queryFn: function(e) {
                    var n = e.pageParam;
                    return q.ZP.getConversations(n || 0, 20, q.ZP.accessToken || o)
                },
                getNextPageParam: function(e) {
                    var n = e.offset + e.limit;
                    return n < e.total ? n : void 0
                },
                enabled: r
            })).data,
            C = p.fetchNextPage,
            j = p.hasNextPage,
            w = p.refetch,
            k = p.isInitialLoading,
            M = p.isError,
            (0,
            l.useMemo)(function() {
                return {
                    conversations: null == y ? void 0 : y.pages.reduce(function(e, n) {
                        if (n) {
                            var t = n.items;
                            e.push.apply(e, (0,
                            S.Z)(void 0 === t ? [] : t))
                        }
                        return e
                    }, []),
                    hasNextPage: j,
                    fetchNextPage: C,
                    refetch: function() {
                        return r && w()
                    },
                    isLoading: k,
                    isError: r && M
                }
            }, [null == y ? void 0 : y.pages, r, C, j, M, k, w, ])), eV = eH.conversations, eW = eH.hasNextPage, eJ = eH.fetchNextPage, eK = eH.refetch, e$ = eH.isLoading, eQ = eH.isError, eX = (0,
            l.useState)(!1), e0 = eX[0], e1 = eX[1], e6 = (E = (B = {
                exempt: !1,
                onRestrictedTermFound: (0,
                l.useCallback)(function(e) {
                    e1(!0),
                    eP(f.s6.promptUsedRestrictedWords, {
                        threadId: eG.current,
                        content: e
                    })
                }, [eP])
            }).exempt,
            G = B.onRestrictedTermFound,
            Y = (W = (0,
            l.useState)(!1))[0],
            Q = W[1],
            {
                hasRestrictedTerms: Y,
                checkRestrictedTerms: (0,
                l.useCallback)(function(e) {
                    var n;
                    return (rs.some(function(t) {
                        var r = t.exec(e);
                        return r && (n = r[0]),
                        r
                    }),
                    !E && n) ? (Q(!0),
                    null == G || G(n),
                    !0) : (Q(!1),
                    !1)
                }, [E, G])
            }), e5 = e6.hasRestrictedTerms, e4 = e6.checkRestrictedTerms, e8 = (0,
            l.useState)(!0), e7 = e8[0], e9 = e8[1], ne = (0,
            l.useState)(!1), nn = ne[0], nt = ne[1], nr = (0,
            l.useState)(!1), na = nr[0], no = nr[1], ni = (0,
            l.useState)(!1), ns = ni[0], nl = ni[1], nu = (X = (0,
            O.kP)().session,
            ee = (0,
            rt.a)(["models"], function() {
                return q.ZP.getModels(null == X ? void 0 : X.accessToken)
            }, {
                enabled: !!(null == X ? void 0 : X.accessToken),
                placeholderData: {
                    models: [{
                        slug: "text-davinci-002-render",
                        max_tokens: 4097,
                        title: "Default",
                        description: "",
                        tags: []
                    }, ]
                },
                onError: function(e) {
                    try {
                        rn.Tb(e)
                    } catch (n) {}
                }
            }).data,
            (0,
            l.useMemo)(function() {
                var e;
                return {
                    availableModels: ee ? (e = ee.models).map(function(e) {
                        return {
                            id: e.slug,
                            maxTokens: e.max_tokens,
                            title: e.title,
                            description: e.description,
                            tags: e.tags,
                            enabledTools: e.enabled_tools
                        }
                    }) : []
                }
            }, [ee])).availableModels, nc = (0,
            tq.p)(function(e) {
                return e.enabledPluginIds
            }), nd = (0,
            nO.ZP)(nu, ej.lastModelUsed), nf = nd.temperature, nm = nd.modelBackend, nh = nd.onChangeModelSetting, ng = (0,
            l.useMemo)(function() {
                return nu.find(function(e) {
                    return e.id === nm
                })
            }, [nu, nm]), nx = (0,
            l.useRef)(new K.Cv(ej.thread)), nv = (0,
            l.useState)(ej.currentLeafId), np = nv[0], nb = nv[1], ny = (0,
            l.useState)(!1), nC = ny[0], nj = ny[1], nw = (0,
            l.useMemo)(function() {
                return {
                    model: nm
                }
            }, [nm]), nk = (0,
            l.useState)(null), nZ = nk[0], nN = nk[1], nP = (0,
            l.useState)({}), nM = nP[0], nS = nP[1], nI = (0,
            l.useState)(new Set), nT = nI[0], nR = nI[1], nA = (0,
            l.useCallback)(function(e) {
                nS(function(n) {
                    return n[e],
                    (0,
                    P.Z)(n, [e].map(I.Z))
                })
            }, []), nD = (0,
            l.useCallback)(function() {
                eK(),
                nE(""),
                nj(!1),
                eP(f.s6.newThread)
            }, [eP, eK]), nB = (0,
            l.useState)(""), nF = nB[0], nE = nB[1], nL = (0,
            l.useState)(""), nU = nL[0], nG = nL[1], nz = nU || nF || ej.title, n_ = (0,
            l.useCallback)(function(e) {
                q.ZP.generateTitle(eG.current, e, nm).then(function(e) {
                    var n = e.title;
                    nE(n),
                    eP(f.s6.renameThread, {
                        threadId: eG.current,
                        content: n,
                        model: nm
                    })
                }).catch(function(e) {
                    console.error(e)
                })
            }, [eP, nm]), nq = (en = eG,
            eu = ew.has("tools3") && (null == ng ? void 0 : null === (n = ng.enabledTools) || void 0 === n ? void 0 : n.includes("tools3")) ? nc : void 0,
            ec = ej.lastModelUsed,
            ed = (0,
            l.useId)(),
            ef = (0,
            d.WS)(),
            eh = (0,
            nO.ZP)(nu, ec).modelBackend,
            ex = (eg = (0,
            l.useState)(0))[0],
            ev = eg[1],
            ep = (0,
            l.useRef)({}),
            eb = (0,
            l.useCallback)(function(e, n, t) {
                var r, a = t.eventSource, o = function() {
                    setTimeout(function() {
                        nA(n),
                        nR(function(e) {
                            var t = new Set(e);
                            return t.delete(n),
                            t
                        }),
                        delete ep.current[n]
                    }, 0)
                }, i = nx.current, s = n, l = i.getParentId(s), u = "CompletionUpdated:".concat(n), c = "CompletionUpdated:".concat(l), d = e === _.Os.Continue, m = !0, h = !1, g = i.getMessage(s), x = i.getIsBlockedFromNode(l), v = !1, p = !1, b = ro()(function() {
                    x || v || (i.updateNodeMessage(s, g),
                    L().publish(u, {
                        nodeId: s
                    }))
                }, 50, {
                    leading: !0,
                    maxWait: 50
                });
                function y(e, n, t) {
                    return C.apply(this, arguments)
                }
                function C() {
                    return (C = (0,
                    Z.Z)(function(e, n, t) {
                        var r, a, o, s, l, d = arguments;
                        return (0,
                        T.__generator)(this, function(m) {
                            switch (m.label) {
                            case 0:
                                r = d.length > 3 && void 0 !== d[3] && d[3],
                                m.label = 1;
                            case 1:
                                return m.trys.push([1, 3, , 4]),
                                [4, (0,
                                z._I)(t, !1, en.current, i.getMessageId(n))];
                            case 2:
                                return o = (a = m.sent()).isBlocked,
                                s = a.isFlagged,
                                (o || s) && (p = !0),
                                o ? (v = !0,
                                r || (x = !0),
                                i.updateNode(n, {
                                    message: {
                                        content: {
                                            parts: {
                                                $set: [""]
                                            }
                                        }
                                    },
                                    metadata: {
                                        $set: z.sK
                                    }
                                }),
                                L().publish(r ? u : c, {
                                    nodeId: n
                                }),
                                ef(r ? f.s6.completionBlockedByModeration : f.s6.promptBlockedByModeration, {
                                    threadId: e,
                                    id: n
                                })) : s ? (i.updateNode(n, {
                                    metadata: {
                                        $set: z.Mf
                                    }
                                }),
                                L().publish(r ? u : c, {
                                    nodeId: n
                                }),
                                ef(r ? f.s6.completionFlaggedByModeration : f.s6.promptFlaggedByModeration, {
                                    threadId: e,
                                    id: n
                                })) : r && x && (i.updateNodeMessage(n, g),
                                L().publish(u, {
                                    nodeId: n
                                })),
                                [3, 4];
                            case 3:
                                return l = m.sent(),
                                v = !0,
                                i.updateNode(n, {
                                    metadata: {
                                        $set: {
                                            err: "An error occured",
                                            errType: "danger"
                                        }
                                    }
                                }),
                                ef(f.s6.moderationError, {
                                    threadId: e,
                                    content: JSON.stringify(l || "")
                                }),
                                L().publish(r ? u : c, {
                                    nodeId: n
                                }),
                                L().publish("UnrecoverableError"),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                return r = (0,
                Z.Z)(function(t) {
                    var r, c, C, j, w, k, Z, N, P;
                    return (0,
                    T.__generator)(this, function(M) {
                        if (r = t.err,
                        c = t.finish_reason,
                        C = t.message,
                        j = t.threadId,
                        (r || !C) && !c)
                            return r && console.error(r),
                            w = (null == r ? void 0 : r.message) || "Something went wrong",
                            i.updateNode(s, {
                                message: {
                                    $set: g
                                },
                                metadata: {
                                    $set: {
                                        err: w,
                                        errType: "danger"
                                    }
                                }
                            }),
                            L().publish(u, {
                                nodeId: s
                            }),
                            o(),
                            [2];
                        if (m && i.isFirstCompletion) {
                            if ((null == C ? void 0 : null === (k = C.author) || void 0 === k ? void 0 : k.role) === _.uU.System)
                                return i.appendSystemMessageToRoot(C),
                                [2];
                            if ((null == C ? void 0 : null === (Z = C.author) || void 0 === Z ? void 0 : Z.role) === _.uU.User)
                                return [2]
                        }
                        return m ? (m = !1,
                        h = i.isFirstCompletion,
                        j && (en.current = j),
                        i.updateNodeMessage(s, C),
                        h && nD(),
                        d || y(en.current, l, i.getTextFromLastNTurns(l, 1), !1),
                        ef(f.s6.generateCompletion, {
                            id: n,
                            threadId: j,
                            completionType: e,
                            eventSource: a,
                            model: eh
                        }),
                        L().publish("PublishAborter", {
                            id: n,
                            aborter: ep.current[n]
                        })) : C && !d && C.id !== i.getMessageId(s) && (b.flush(),
                        i.addNode(C.id, C, s, _.Jq.Completion),
                        nb(s = C.id),
                        u = "CompletionUpdated:".concat(s)),
                        C && (g = C),
                        b(),
                        "stop" === c && (x || v || (b.flush(),
                        !p && h && n_(i.getMessageId(s))),
                        N = K.Cv.getTextFromMessage(g),
                        P = i.getTextFromLastNTurns(l, 2) + "\n\n" + N,
                        y(en.current, s, P, !0),
                        v || L().publish(u, {
                            nodeId: s
                        }),
                        o()),
                        [2]
                    })
                }),
                function(e) {
                    return r.apply(this, arguments)
                }
            }, [ef, eh, nD, n_, nA, nR, nb, en, nx, ]),
            (0,
            l.useCallback)((ey = (0,
            Z.Z)(function(e, n, t, r) {
                var a, o, i, s, l, u, c, d;
                return (0,
                T.__generator)(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return a = nx.current,
                        ev(function(e) {
                            return e + 1
                        }),
                        o = "request-".concat(ed, "-").concat(ex),
                        nR(function(e) {
                            var n = new Set(e);
                            return n.add(o),
                            n
                        }),
                        a.addNode(o, "", n, _.Jq.Completion),
                        nb(o),
                        s = [],
                        l = a.getNode(n),
                        e === _.Os.Next || e === _.Os.Variant ? (i = (null === (u = (c = a.getNode(l.parentId)).message) || void 0 === u ? void 0 : u.id) || c.id,
                        s.push(l.message)) : i = l.message.id,
                        [4, q.ZP.publicApiCompletionStream({
                            model: eh,
                            availableModels: nu,
                            currentThreadModel: ec
                        }, {
                            completionType: e,
                            threadId: en.current || void 0,
                            parentMessageId: i,
                            messages: s,
                            enabledPluginIds: eu
                        }, eb(e, o, r))];
                    case 1:
                        return d = t.sent(),
                        ep.current[o] = d,
                        [2]
                    }
                })
            }),
            function(e, n, t, r) {
                return ey.apply(this, arguments)
            }
            ), [nx, ed, ex, nR, nb, eh, nu, eu, ec, en, eb, ])), nH = (0,
            l.useCallback)(function() {
                eZ.replace({
                    pathname: eZ.basePath,
                    query: {}
                }, void 0, {
                    shallow: !0
                })
            }, [eZ]), nV = (0,
            l.useCallback)(function() {
                if (np) {
                    var e = nx.current.getBranchFromLeaf(np);
                    nS(function(n) {
                        var t = (0,
                        g.Z)({}, n);
                        return e.forEach(function(e) {
                            e.id in t && (t[e.id].abort(),
                            delete t[e.id])
                        }),
                        t
                    }),
                    nR(function(n) {
                        var t = new Set(n);
                        return e.forEach(function(e) {
                            t.delete(e.id)
                        }),
                        t
                    })
                }
            }, [np]), nW = (0,
            l.useCallback)((eC = (0,
            Z.Z)(function(e, n, t, r) {
                return (0,
                T.__generator)(this, function(a) {
                    return r && nV(),
                    e !== _.Os.Continue && e4(nx.current.getTextFromNode(n)) || (eM(eG.current),
                    nq(e, n, nw, t)),
                    [2]
                })
            }),
            function(e, n, t, r) {
                return eC.apply(this, arguments)
            }
            ), [e4, eM, nq, nw, nV, ]), nJ = (0,
            l.useCallback)(function(e, n, t, r) {
                nx.current.addNode(e, r, n, _.Jq.Prompt)
            }, []), nK = (0,
            l.useCallback)(function(e, n, t) {
                var r = n.value;
                nJ(e, np, _.Jq.Prompt, r),
                nW(_.Os.Next, e, t, !0)
            }, [np, nJ, nW]), n$ = (0,
            l.useMemo)(function() {
                var e, n, t = nx.current.getNode(np), r = t.type === _.Jq.Prompt, a = (null === (e = t.metadata) || void 0 === e ? void 0 : e.err) && (null === (n = t.metadata) || void 0 === n ? void 0 : n.errCode) !== z.Dd;
                return Boolean(r || a) && 0 === nT.size
            }, [nT.size, np]), nY = (0,
            l.useCallback)(function(e) {
                var n = nx.current.getParentPromptNode(e).id;
                n$ && (n = e),
                nW(_.Os.Variant, n, {
                    eventSource: "mouse"
                }, !1)
            }, [nW, n$]), nQ = (0,
            l.useCallback)(function(e) {
                nW(_.Os.Continue, e, {
                    eventSource: "mouse"
                }, !1)
            }, [nW]), nX = (0,
            l.useCallback)(function(e) {
                nb(nx.current.getLeafFromNode(e).id),
                eP(f.s6.changeNode)
            }, [eP, nb]), n0 = (0,
            l.useCallback)(function(e, n) {
                nx.current.updateNodeText(e, n)
            }, []), n1 = (0,
            l.useCallback)(function(e, n, t) {
                eP(f.s6.thumbRating, {
                    id: n,
                    threadId: eG.current,
                    rating: t,
                    model: nm
                }),
                eG.current && q.ZP.submitMessageFeedback({
                    message_id: n,
                    conversation_id: eG.current,
                    rating: t
                }),
                eR(t),
                eL(n);
                var r = nx.current.getMetadata(e);
                nx.current.updateNode(e, {
                    metadata: {
                        $set: (0,
                        x.Z)((0,
                        g.Z)({}, r), {
                            rating: t
                        })
                    }
                })
            }, [eP, nm]), n2 = (0,
            l.useCallback)(function() {
                var e, n = null === (e = eU.current) || void 0 === e ? void 0 : e.elements, t = (0,
                S.Z)(n || []).filter(function(e) {
                    return e.checked
                }).map(function(e) {
                    return e.id
                }), r = (null == n ? void 0 : n["feedback-other"].value) || "";
                eT && eE && (r || t.length > 0) && (eP(f.s6.reportResult, {
                    id: eE,
                    threadId: eG.current,
                    content: r,
                    model: nm,
                    rating: eT,
                    tags: t
                }),
                eG.current && q.ZP.submitMessageFeedback({
                    message_id: eE,
                    conversation_id: eG.current,
                    rating: eT,
                    text: r,
                    tags: t.map(function(e) {
                        return e.replace("feedback-", "")
                    })
                })),
                eR(void 0)
            }, [eP, nm, eE, eT]), n3 = (0,
            l.useCallback)(function(e) {
                nx.current.deleteNode(e)
            }, []), n6 = (0,
            l.useCallback)(function(e) {
                switch (null == e ? void 0 : e.state) {
                case "pending":
                    nJ("artifact", "root", _.Jq.Prompt, e.url),
                    nJ("artifact-summary", "artifact", _.Jq.Completion, "loading..."),
                    nb("artifact"),
                    nN(e);
                    break;
                case "success":
                    n0("artifact-summary", e.contents),
                    nb("artifact-summary"),
                    nN(e);
                    break;
                default:
                    nN(e)
                }
            }, [nJ, n0, nb]), n5 = (0,
            l.useCallback)(function() {
                nl(function(e) {
                    return "debug" !== e && "debug"
                })
            }, []), n4 = (0,
            l.useCallback)(function() {
                eP(f.s6.clickSidebarAccountPortalMenuItem),
                no(!0)
            }, [eP, no]), n8 = (0,
            l.useCallback)(function() {
                no(!1)
            }, [no]), n7 = b(function(e) {
                return {
                    setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                    showAccountPaymentModal: e.showAccountPaymentModal
                }
            }), n9 = n7.showAccountPaymentModal, te = n7.setShowAccountPaymentModal, tn = (0,
            l.useCallback)(function() {
                te(!0, function() {
                    eP(f.s6.clickSidebarAccountPaymentMenuItem)
                })
            }, [eP, te]), tt = (0,
            l.useCallback)(function() {
                te(!1)
            }, [te]), tr = (0,
            l.useCallback)(function() {
                nl(function(e) {
                    return "navigation" !== e && "navigation"
                })
            }, []), ta = (0,
            l.useCallback)(function(e, n) {
                if (nx.current.isFirstCompletion) {
                    var t, r = nx.current.getParent(n);
                    (null === (t = r.metadata) || void 0 === t ? void 0 : t.errCode) !== z.Dd && setTimeout(function() {
                        n_(r.message.id)
                    }, 500)
                }
                nS(function(e) {
                    var t = e[n]
                      , r = (0,
                    P.Z)(e, [n].map(I.Z));
                    return null == t || t.abort(),
                    r
                }),
                nR(function(e) {
                    var t = new Set(e);
                    return t.delete(n),
                    t
                })
            }, [n_]), to = (0,
            l.useCallback)(function(e, n) {
                var t = n.id
                  , r = n.aborter;
                r && nS(function(e) {
                    return (0,
                    x.Z)((0,
                    g.Z)({}, e), (0,
                    N.Z)({}, t, r))
                })
            }, []), ti = (0,
            l.useCallback)(function() {
                nS(function(e) {
                    return Object.values(e).forEach(function(e) {
                        return e.abort()
                    }),
                    {}
                }),
                nR(new Set),
                nb("root"),
                nN(null),
                nx.current = new K.Cv,
                eG.current = "",
                nj(!0),
                eK()
            }, [eK]), tl = (0,
            l.useCallback)(function() {
                q.ZP.deleteConversations().then(function() {
                    eK()
                }),
                eZ.asPath !== rm ? eZ.replace({
                    pathname: rm
                }) : ti()
            }, [ti, eK, eZ]), tu = (0,
            l.useCallback)(function() {
                nt(!0)
            }, []);
            (0,
            l.useEffect)(function() {
                return L().subscribe("AbortCompletion", ta),
                L().subscribe("PublishAborter", to),
                L().subscribe("UnrecoverableError", tu),
                function() {
                    L().unsubscribe("AbortCompletion"),
                    L().unsubscribe("PublishAborter"),
                    L().unsubscribe("UnrecoverableError")
                }
            }, [ta, to, tu]);
            var tc = (0,
            l.useMemo)(function() {
                return nx.current.getConversationTurns(np || "root")
            }, [np])
              , td = (0,
            l.useMemo)(function() {
                return 0 === tc.length ? np : K.Cv.getRequestIdFromConversationTurn(tc[tc.length - 1])
            }, [tc, np])
              , tf = (0,
            l.useState)("")
              , tm = tf[0]
              , tg = tf[1]
              , tx = (0,
            l.useCallback)(function() {
                e9(!0),
                m.m.setItem("oai/librarian/hasSeenWarning", "true")
            }, [])
              , tv = (0,
            l.useCallback)(function() {
                e1(!1)
            }, [])
              , tp = (0,
            l.useMemo)(function() {
                return ew.has("debug") ? new Set([nO.G3.Model]) : new Set
            }, [ew])
              , tb = (0,
            l.useMemo)(function() {
                return !!ew.has("can_continue") && !nM[np] && nx.current.isMessageIncomplete(np)
            }, [nM, np, ew])
              , ty = void 0 !== eO && eO
              , tC = (0,
            tA().getHasSeenOnboardingDate)()
              , tj = tC && new Date("2023-01-11") > tC && !localStorage.getItem(rf);
            (0,
            l.useEffect)(function() {
                tj && (tH.m.success("Your previously unavailable conversation history has been restored! Your previous conversations can now be viewed and continued as normal. We apologize for any inconvenience caused by the recent outage. Thank you for your patience and understanding.", {
                    hasCloseButton: !0,
                    duration: 0
                }),
                localStorage.setItem(rf, "true"))
            }, [tj]);
            var tw = (0,
            l.useMemo)(function() {
                return (0,
                a.jsx)(em, {
                    items: eV || [],
                    activeId: nC ? "" : eG.current,
                    hasNextPage: Boolean(eW),
                    onNextPage: eJ,
                    onNewThread: ti,
                    onRefetchHistory: eK,
                    onUpdateUserModifiedTitle: nG,
                    userModifiedTitle: nU,
                    newChatName: nF,
                    isLoading: e$,
                    isError: eQ
                })
            }, [eV, nC, eW, eJ, ti, eK, nU, nF, e$, eQ, ]);
            return (0,
            a.jsxs)(rg, {
                children: [(0,
                a.jsx)(F(), {
                    children: (0,
                    a.jsx)("title", {
                        children: nz
                    })
                }), !e7 && (0,
                a.jsx)(u.Z, {
                    isOpen: !0,
                    onModalClose: tx,
                    icon: A.Z,
                    title: "Do not share sensitive materials with this application",
                    primaryButton: (0,
                    a.jsx)(u.m, {
                        onClick: tx,
                        title: "Acknowledge"
                    }),
                    type: "danger"
                }, "OnboardingModal"), e5 && e0 && (0,
                a.jsx)(u.Z, {
                    isOpen: !0,
                    onModalClose: tv,
                    icon: c.U0j,
                    title: "This prompt may violate our content policy.",
                    primaryButton: (0,
                    a.jsx)(u.m, {
                        onClick: tv,
                        title: "Acknowledge"
                    }),
                    type: "danger"
                }, "RestrictedTerms"), Boolean(eT) && (0,
                a.jsx)(u.Z, {
                    isOpen: !0,
                    onModalClose: function() {
                        return eR(void 0)
                    },
                    type: "thumbsUp" === eT ? "success" : "danger",
                    icon: "thumbsUp" === eT ? c.fmn : c.oLd,
                    title: "Provide additional feedback",
                    primaryButton: (0,
                    a.jsx)(u.m, {
                        title: "Submit feedback",
                        onClick: n2
                    }),
                    children: (0,
                    a.jsxs)("form", {
                        ref: eU,
                        children: [(0,
                        a.jsx)(U.ZP, {
                            id: "feedback-other",
                            placeholder: "What would the ideal answer have been?",
                            rows: 3,
                            className: "mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                        }), "thumbsDown" === eT && (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                            a.jsx)($, {
                                id: "feedback-harmful",
                                label: "This is harmful / unsafe"
                            }), (0,
                            a.jsx)($, {
                                id: "feedback-false",
                                label: "This isn't true"
                            }), (0,
                            a.jsx)($, {
                                id: "feedback-not-helpful",
                                label: "This isn't helpful"
                            })]
                        })]
                    })
                }, "RatingModal-".concat(eE)), (0,
                a.jsxs)("div", {
                    className: "flex h-full flex-1 flex-col md:pl-[260px]",
                    children: [eN && (0,
                    a.jsx)(eF, {
                        onNewThread: ti,
                        onSidebarOpen: tr,
                        title: ej.title,
                        newChatName: nF
                    }), (0,
                    a.jsxs)(rx, {
                        className: "flex-1 ",
                        children: [(0,
                        a.jsx)(rv, {
                            children: (0,
                            a.jsx)(th, {
                                children: (0,
                                a.jsx)(ts, {
                                    isLoading: ek,
                                    onChangeItemInView: nX,
                                    onCreateNewNode: nJ,
                                    onUpdateNode: n0,
                                    onChangeRating: n1,
                                    onDeleteNode: n3,
                                    onRequestCompletion: nW,
                                    onChangeCurrentPrompt: tg,
                                    threadId: eG.current,
                                    treeRef: nx,
                                    conversationTurns: tc,
                                    activeRequests: nT,
                                    isProcessingArtifact: (null == nZ ? void 0 : nZ.state) === "pending",
                                    onChangeModelSetting: nh,
                                    availableModels: nu,
                                    currentThreadModel: ej.lastModelUsed,
                                    canShowThreadSettings: ew.has("model_switcher") && nu.length > 1
                                })
                            })
                        }), (0,
                        a.jsxs)(rp, {
                            children: [(0,
                            a.jsx)(eY, {
                                currentLeafId: np,
                                currentRequestId: td,
                                threadId: eG.current,
                                currentPrompt: tm,
                                onChangeCurrentPrompt: tg,
                                onRequestMoreCompletions: nY,
                                onCreateNewCompletion: nK,
                                onAbortCompletion: ta,
                                onContinueGenerating: nQ,
                                isCompletionInProgress: nT.has(td),
                                onUpdateArtifactStatus: n6,
                                artifact: nZ,
                                className: (0,
                                D.Z)("stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"),
                                shouldRetry: n$,
                                canContinue: tb,
                                disabled: !nu.length,
                                canPause: Boolean(nM[td])
                            }), !eO && (0,
                            a.jsxs)("div", {
                                className: "px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
                                children: [(0,
                                a.jsx)("a", {
                                    href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "underline",
                                    children: "ChatGPT Feb 13 Version"
                                }), ". Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve."]
                            })]
                        })]
                    })]
                }), eN && (0,
                a.jsx)(eB, {
                    onSidebarOpen: tr,
                    sidebarOpen: "navigation" === ns,
                    onClickAccountPayment: tn,
                    showAccountPaymentMenuItem: !ty && ez,
                    onClickCustomerPortal: n4,
                    showCustomerPortalMenuItem: ty,
                    onDeleteHistory: tl,
                    showDeleteHistory: Boolean(null == eV ? void 0 : eV.length),
                    onNewThread: ti,
                    onOpenDebugPanel: n5,
                    children: tw
                }), !eN && (0,
                a.jsx)(eD, {
                    onClickAccountPayment: tn,
                    showAccountPaymentMenuItem: !ty && ez,
                    onClickCustomerPortal: n4,
                    showCustomerPortalMenuItem: ty,
                    onDeleteHistory: tl,
                    showDeleteHistory: Boolean(null == eV ? void 0 : eV.length),
                    onNewThread: ti,
                    onOpenDebugPanel: n5,
                    settings: tp.size > 0 && (0,
                    a.jsx)(e2.ZP, {
                        temperature: nf,
                        onRestoreDefaults: nH,
                        onChangeModelSetting: nh,
                        position: "top-right",
                        modelSettings: tp,
                        features: ew,
                        children: (0,
                        a.jsxs)(R.J.Button, {
                            as: eI,
                            children: [(0,
                            a.jsx)(h.ZP, {
                                icon: c.nbt
                            }), "Settings"]
                        })
                    }),
                    children: tw
                }), (0,
                a.jsx)(e3, {
                    icon: c.cDN,
                    title: "Debug",
                    sidebarOpen: "debug" === ns,
                    onSidebarOpen: tr,
                    children: (0,
                    a.jsx)(t4, {
                        treeRef: nx,
                        currentLeafId: np
                    })
                }), ez && (0,
                a.jsx)(t$.Z, {
                    isOpen: n9,
                    onClose: tt
                }), ty && (0,
                a.jsx)(tK, {
                    isOpen: na,
                    onClose: n8
                }), nn && (0,
                a.jsx)(u.Z, {
                    onModalClose: i(),
                    isOpen: !0,
                    icon: A.Z,
                    title: "Something went wrong",
                    description: "We're sorry, but something went wrong. Please try again later.",
                    primaryButton: (0,
                    a.jsx)(u.m, {
                        onClick: function() {
                            ti(),
                            nt(!1)
                        },
                        title: "Reset thread"
                    }),
                    type: "danger"
                }, "UnrecoverableErrorModal")]
            })
        }
          , rg = G.Z.div(rl())
          , rx = G.Z.main(ru())
          , rv = G.Z.div(rc())
          , rp = G.Z.div(rd())
          , rb = t(49690)
          , ry = {
            AD: "Andorra",
            AE: "United Arab Emirates",
            AG: "Antigua and Barbuda",
            AI: "Anguilla",
            AL: "Albania",
            AM: "Armenia",
            AO: "Angola",
            AQ: "Antarctica",
            AR: "Argentina",
            AS: "American Samoa",
            AT: "Austria",
            AU: "Australia",
            AW: "Aruba",
            AX: "\xc5land Islands",
            AZ: "Azerbaijan",
            BA: "Bosnia and Herzegovina",
            BB: "Barbados",
            BD: "Bangladesh",
            BE: "Belgium",
            BF: "Burkina Faso",
            BG: "Bulgaria",
            BJ: "Benin",
            BL: "Saint Barth\xe9lemy",
            BM: "Bermuda",
            BN: "Brunei",
            BO: "Bolivia",
            BQ: "Caribbean Netherlands",
            BR: "Brazil",
            BS: "The Bahamas",
            BT: "Bhutan",
            BV: "Bouvet Island",
            BW: "Botswana",
            BZ: "Belize",
            CA: "Canada",
            CC: "Cocos (Keeling) Islands",
            CG: "The Republic of the Congo",
            CH: "Switzerland",
            CI: "Ivory Coast",
            CK: "Cook Islands",
            CL: "Chile",
            CO: "Colombia",
            CR: "Costa Rica",
            CV: "Cape Verde",
            CW: "Cura\xe7ao",
            CX: "Christmas Island",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DE: "Germany",
            DJ: "Djibouti",
            DK: "Denmark",
            DM: "Dominica",
            DO: "Dominican Republic",
            DZ: "Algeria",
            EC: "Ecuador",
            EE: "Estonia",
            EH: "Western Sahara",
            ES: "Spain",
            FI: "Finland",
            FJ: "Fiji",
            FK: "Falkland Islands",
            FM: "Micronesia",
            FO: "Faroe Islands",
            FR: "France",
            GA: "Gabon",
            GB: "United Kingdom",
            GD: "Grenada",
            GE: "Georgia",
            GF: "French Guiana",
            GG: "Guernsey",
            GH: "Ghana",
            GI: "Gibraltar",
            GL: "Greenland",
            GM: "Gambia",
            GN: "Guinea",
            GP: "Guadeloupe",
            GR: "Greece",
            GS: "South Georgia and the South Sandwich Islands",
            GT: "Guatemala",
            GU: "Guam",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HM: "Heard Island and McDonald Islands",
            HN: "Honduras",
            HR: "Croatia",
            HT: "Haiti",
            HU: "Hungary",
            ID: "Indonesia",
            IE: "Ireland",
            IL: "Israel",
            IM: "Isle of Man",
            IO: "British Indian Ocean Territory",
            IQ: "Iraq",
            IS: "Iceland",
            IT: "Italy",
            JE: "Jersey",
            JM: "Jamaica",
            JO: "Jordan",
            JP: "Japan",
            KE: "Kenya",
            KG: "Kyrgyzstan",
            KI: "Kiribati",
            KM: "Comoros",
            KN: "Saint Kitts and Nevis",
            KR: "South Korea",
            KW: "Kuwait",
            KY: "Cayman Islands",
            KZ: "Kazakhstan",
            LB: "Lebanon",
            LC: "Saint Lucia",
            LI: "Liechtenstein",
            LK: "Sri Lanka",
            LR: "Liberia",
            LS: "Lesotho",
            LT: "Lithuania",
            LU: "Luxembourg",
            LV: "Latvia",
            MA: "Morocco",
            MC: "Monaco",
            MD: "Moldova",
            ME: "Montenegro",
            MF: "Saint Martin",
            MG: "Madagascar",
            MH: "The Marshall Islands",
            MK: "North Macedonia",
            ML: "Mali",
            MM: "Myanmar",
            MN: "Mongolia",
            MP: "The Northern Mariana Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MS: "Montserrat",
            MT: "Malta",
            MU: "Mauritius",
            MV: "Maldives",
            MW: "Malawi",
            MX: "Mexico",
            MY: "Malaysia",
            MZ: "Mozambique",
            NA: "Namibia",
            NC: "New Caledonia",
            NE: "Niger",
            NF: "Norfolk Island",
            NG: "Nigeria",
            NI: "Nicaragua",
            NL: "Netherlands",
            NO: "Norway",
            NP: "Nepal",
            NR: "Nauru",
            NU: "Niue",
            NZ: "New Zealand",
            OM: "Oman",
            PA: "Panama",
            PE: "Peru",
            PF: "French Polynesia",
            PG: "Papua New Guinea",
            PH: "Philippines",
            PK: "Pakistan",
            PL: "Poland",
            PM: "Saint Pierre and Miquelon",
            PN: "Pitcairn",
            PR: "Puerto Rico",
            PS: "Palestine",
            PT: "Portugal",
            PW: "Palau",
            PY: "Paraguay",
            QA: "Qatar",
            RE: "Reunion",
            RO: "Romania",
            RS: "Serbia",
            RW: "Rwanda",
            SB: "Solomon Islands",
            SC: "The Seychelles",
            SE: "Sweden",
            SG: "Singapore",
            SH: "Saint Helena, Ascension and Tristan da Cunha",
            SI: "Slovenia",
            SJ: "Svalbard and Jan Mayen",
            SK: "Slovakia",
            SL: "Sierra Leone",
            SM: "San Marino",
            SN: "Senegal",
            SR: "Suriname",
            ST: "Sao Tome and Principe",
            SV: "El Salvador",
            SX: "Sint Maarten",
            TC: "Turks and Caicos Islands",
            TF: "French Southern Territories",
            TG: "Togo",
            TH: "Thailand",
            TK: "Tokelau",
            TL: "Timor-Leste",
            TN: "Tunisia",
            TO: "Tonga",
            TR: "Turkey",
            TT: "Trinidad and Tobago",
            TV: "Tuvalu",
            TW: "Taiwan",
            TZ: "Tanzania",
            UA: "Ukraine",
            UG: "Uganda",
            UM: "The United States Minor Outlying Islands",
            US: "The United States",
            UY: "Uruguay",
            VA: "Vatican City",
            VC: "Saint Vincent and the Grenadines",
            VG: "British Virgin Islands",
            VI: "U.S. Virgin Islands",
            VN: "Vietnam",
            VU: "Vanuatu",
            WF: "Wallis and Futuna",
            WS: "Samoa",
            YT: "Mayotte",
            ZA: "South Africa",
            ZM: "Zambia",
            ZW: "Zimbabwe"
        }
          , rC = !0;
        function rj(e) {
            var n, t, r = e.user, o = e.accessToken, c = e.features, m = e.accountStatusResponse, h = e.isUserInCanPayGroup, g = e.showcasePlusUpdate, x = e.shouldShowPaidAnnouncement, v = e.serviceStatus, p = e.userCountry, b = (0,
            l.useState)(!1), y = b[0], C = b[1], w = (0,
            s.useRouter)(), k = tA().getHasSeenOnboardingDate, Z = (0,
            H.nR)(), N = (null === (n = w.query.chatId) || void 0 === n ? void 0 : n[0]) || "", P = (0,
            rr.Z)({
                threadId: N,
                accessToken: o
            }), M = P.threadData, S = P.isLoading, I = (0,
            V.g)(function(e) {
                return e.updateFlagValue
            }), T = p ? ry[p] : void 0;
            (0,
            l.useEffect)(function() {
                void 0 !== h && I("isUserInCanPayGroup", h)
            }, [I, h]),
            (0,
            l.useEffect)(function() {
                void 0 !== g && I("highlightPlusUpgrade", g)
            }, [I, g]),
            (0,
            l.useEffect)(function() {
                (null == v ? void 0 : v.type) && void 0 !== Z && !Z && tH.m.warning(v.message, {
                    hasCloseButton: !0,
                    duration: 5
                })
            }, [Z, null == v ? void 0 : v.message, null == v ? void 0 : v.type]);
            var R = (0,
            l.useMemo)(function() {
                return {
                    app: f.VY,
                    origin: "chat"
                }
            }, [])
              , A = (0,
            H.mA)(function(e) {
                return {
                    accountPlan: e.accountPlan,
                    updateAccountPlanWithResponse: e.updateAccountPlanWithResponse
                }
            })
              , D = A.accountPlan
              , B = A.updateAccountPlanWithResponse;
            return (0,
            rb.Z)("ChatGPT", r, o, R, c, null == m ? void 0 : m.account_plan),
            (0,
            l.useEffect)(function() {
                var e;
                (null == D ? void 0 : D.hasPaidSubscription) !== (null === (e = m.account_plan) || void 0 === e ? void 0 : e.is_paid_subscription_active) && m && B(m)
            }, [B, m, D]),
            (0,
            l.useEffect)(function() {
                C(!k())
            }, [k]),
            (0,
            a.jsxs)(d.Af.Provider, {
                value: R,
                children: [(0,
                a.jsx)(u.Z, {
                    isOpen: y,
                    onModalClose: i(),
                    type: "success",
                    title: "",
                    primaryButton: void 0,
                    children: (0,
                    a.jsx)(tD, {
                        onClose: function() {
                            return C(!1)
                        }
                    })
                }), (0,
                a.jsx)(j, {
                    userCountry: T,
                    canShowPaidAnnouncement: x,
                    isUserPaid: null === (t = m.account_plan) || void 0 === t ? void 0 : t.is_paid_subscription_active,
                    hasSeenOnboardingDate: k()
                }), (0,
                a.jsx)(rh, {
                    initialData: M,
                    features: new Set(c),
                    isLoading: S
                }, M.threadId || "new")]
            })
        }
    },
    20212: function(e, n, t) {
        "use strict";
        t.d(n, {
            D2: function() {
                return v
            },
            Vp: function() {
                return k
            },
            YA: function() {
                return b
            },
            ZP: function() {
                return p
            }
        });
        var r = t(14806)
          , a = t(35250)
          , o = t(35888)
          , i = t(40638)
          , s = t(19841)
          , l = t(70079)
          , u = t(99581)
          , c = t(48240)
          , d = t(34303)
          , f = t(11699)
          , m = t(79876);
        function h() {
            var e = (0,
            r.Z)(["rounded bg-white ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white/20"]);
            return h = function() {
                return e
            }
            ,
            e
        }
        function g() {
            var e = (0,
            r.Z)(["absolute z-10 mt-2 max-h-60 w-full overflow-auto text-base focus:outline-none dark:last:border-0 sm:text-xs md:w-[100%]"]);
            return g = function() {
                return e
            }
            ,
            e
        }
        function x() {
            var e = (0,
            r.Z)(["absolute z-10 -ml-[1px] flex flex-col gap-2 p-3"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        var v = ["confidential", "plus"];
        function p(e) {
            var n = e.name
              , t = e.selectedOption
              , r = e.options
              , i = e.actions
              , s = e.onChange
              , u = e.onAction
              , c = (0,
            l.useCallback)(function(e) {
                "string" == typeof e ? null == u || u(e) : s(e)
            }, [s, u]);
            return (0,
            a.jsx)(o.R, {
                value: t.value,
                onChange: c,
                children: function(e) {
                    var o = e.open;
                    return (0,
                    a.jsx)(y, {
                        name: n,
                        selectedLabel: (0,
                        a.jsxs)(a.Fragment, {
                            children: [t.title, t.tags.map(function(e) {
                                return k(e)
                            })]
                        }),
                        open: o,
                        options: r,
                        actions: i
                    })
                }
            })
        }
        function b(e) {
            var n = e.name
              , t = e.selectedOptions
              , r = e.selectedLabel
              , i = e.options
              , s = e.actions
              , u = e.onChange
              , c = e.onAction
              , d = (0,
            l.useCallback)(function(e) {
                if (e.some(function(e) {
                    return "string" == typeof e
                })) {
                    var n = e.find(function(e) {
                        return "string" == typeof e
                    });
                    null == c || c(n)
                } else
                    u(e)
            }, [u, c]);
            return (0,
            a.jsx)(o.R, {
                value: t.map(function(e) {
                    return e.value
                }),
                multiple: !0,
                onChange: d,
                children: function(e) {
                    var o = e.open;
                    return (0,
                    a.jsx)(y, {
                        name: n,
                        selectedLabel: r || "".concat(t.length, " selected"),
                        open: o,
                        options: i,
                        actions: s
                    })
                }
            })
        }
        function y(e) {
            var n = e.name
              , t = e.selectedLabel
              , r = e.open
              , d = e.options
              , h = e.actions
              , g = (0,
            l.useRef)(null)
              , x = (0,
            f.dD)();
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsxs)("div", {
                    className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
                    children: [(0,
                    a.jsxs)(o.R.Button, {
                        className: "relative flex w-full cursor-default flex-col rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm",
                        children: [(0,
                        a.jsx)(o.R.Label, {
                            className: "block text-xs text-gray-700 dark:text-gray-500",
                            children: n
                        }), (0,
                        a.jsx)("span", {
                            className: "inline-flex w-full truncate",
                            children: (0,
                            a.jsx)("span", {
                                className: "flex h-6 items-center gap-1 truncate",
                                children: t
                            })
                        }), (0,
                        a.jsx)("span", {
                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                            children: (0,
                            a.jsx)(m.ZP, {
                                icon: c.bTu,
                                className: " text-gray-400",
                                "aria-hidden": "true"
                            })
                        })]
                    }), (0,
                    a.jsx)(i.u, {
                        show: r,
                        as: l.Fragment,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0,
                        a.jsxs)(N, {
                            $as: o.R.Options,
                            ref: g,
                            children: [d.map(function(e, n) {
                                return (0,
                                a.jsx)(C, {
                                    value: e.value,
                                    children: function(n) {
                                        var t = n.selected
                                          , r = n.active;
                                        return (0,
                                        a.jsxs)(a.Fragment, {
                                            children: [(0,
                                            a.jsxs)("div", {
                                                className: "flex items-center gap-1 truncate",
                                                children: [e.imageUrl && (0,
                                                a.jsx)("img", {
                                                    src: e.imageUrl,
                                                    className: "h-6 w-6 rounded",
                                                    alt: "".concat(e.title, " logo")
                                                }), (0,
                                                a.jsxs)("span", {
                                                    className: (0,
                                                    s.Z)(t && "font-semibold", "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"),
                                                    children: [e.title, e.tags.map(function(e) {
                                                        return k(e)
                                                    })]
                                                })]
                                            }), t && (0,
                                            a.jsx)(j, {
                                                icon: c.UgA
                                            }), r && !x && (0,
                                            u.createPortal)((0,
                                            a.jsx)(w, {
                                                option: e,
                                                dropdownRef: g
                                            }), document.body)]
                                        })
                                    }
                                }, n)
                            }), null == h ? void 0 : h.map(function(e, n) {
                                return (0,
                                a.jsx)(C, {
                                    value: e.id,
                                    children: function() {
                                        return (0,
                                        a.jsxs)(a.Fragment, {
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "text-gray-800 dark:text-gray-100",
                                                children: e.label
                                            }), (0,
                                            a.jsx)(j, {
                                                icon: e.icon
                                            })]
                                        })
                                    }
                                }, n)
                            })]
                        })
                    })]
                })
            })
        }
        function C(e) {
            var n = e.value
              , t = e.children;
            return (0,
            a.jsx)(o.R.Option, {
                className: function(e) {
                    var n = e.active;
                    return (0,
                    s.Z)(n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900", "relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-gray-100 pl-3 pr-9 last:border-0 dark:border-white/20")
                },
                value: n,
                children: t
            })
        }
        function j(e) {
            var n = e.icon;
            return (0,
            a.jsx)("span", {
                className: (0,
                s.Z)("absolute inset-y-0 right-0 flex items-center pr-4 text-gray-800 dark:text-gray-100"),
                children: (0,
                a.jsx)(m.ZP, {
                    icon: n,
                    className: "h-5 w-5",
                    "aria-hidden": "true"
                })
            })
        }
        function w(e) {
            var n = e.option
              , t = e.dropdownRef
              , r = (0,
            l.useState)()
              , o = r[0]
              , i = r[1];
            return ((0,
            l.useEffect)(function() {
                var e = function() {
                    if (t.current) {
                        var e, n = t.current.getBoundingClientRect(), r = n.top;
                        i({
                            top: r,
                            left: n.left - 238,
                            minHeight: n.height
                        })
                    }
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }, [t]),
            o) ? (0,
            a.jsxs)(P, {
                style: {
                    width: 238,
                    minHeight: o.minHeight,
                    top: o.top,
                    left: o.left
                },
                children: [(0,
                a.jsx)("div", {
                    children: n.title
                }), (0,
                a.jsx)("div", {
                    className: "text-xs",
                    children: n.description
                })]
            }) : null
        }
        var k = function(e) {
            return v.includes(e) && (0,
            a.jsx)("span", {
                className: (0,
                s.Z)("py-0.25 rounded px-1 text-[10px] font-semibold uppercase", "confidential" === e && "bg-red-200 text-red-800", "plus" === e && "bg-yellow-200 text-yellow-900"),
                children: e
            }, e)
        }
          , Z = d.Z.div(h())
          , N = (0,
        d.Z)(Z)(g())
          , P = (0,
        d.Z)(Z)(x())
    },
    46275: function(e, n, t) {
        "use strict";
        t.d(n, {
            bG: function() {
                return p
            },
            ZP: function() {
                return b
            }
        });
        var r = t(14806)
          , a = t(35250)
          , o = t(87093)
          , i = t(40638)
          , s = t(19841)
          , l = t(70079)
          , u = t(34303)
          , c = t(62676)
          , d = t(39690)
          , f = t(6004);
        function m(e) {
            var n = e.onChange
              , t = e.enabled
              , r = e.size
              , o = e.Icon
              , i = (0,
            l.useCallback)(function() {
                n(!t)
            }, [t, n])
              , u = !t && "translate-x-0";
            return (0,
            a.jsxs)(f.r, {
                checked: t,
                onChange: i,
                className: (0,
                s.Z)(t ? "!bg-indigo-600" : "!bg-gray-200", "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0", "large" === r ? "h-6 w-11" : "h-4 w-8"),
                children: [(0,
                a.jsx)("span", {
                    className: "sr-only",
                    children: "Use setting"
                }), (0,
                a.jsxs)("span", {
                    className: (0,
                    s.Z)("pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", t && "large" === r ? "translate-x-5" : u, t && "small" === r ? "translate-x-4" : u, "large" === r ? "h-5 w-5" : "h-3 w-3"),
                    children: [(0,
                    a.jsx)("span", {
                        className: (0,
                        s.Z)(t ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
                        "aria-hidden": "true"
                    }), (0,
                    a.jsx)("span", {
                        className: (0,
                        s.Z)(t ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
                        "aria-hidden": "true",
                        children: o && (0,
                        a.jsx)(o, {
                            className: "h-3 w-3 text-indigo-600"
                        })
                    })]
                })]
            })
        }
        var h = t(44819);
        function g() {
            var e = (0,
            r.Z)(["block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 outline-none border-none"]);
            return g = function() {
                return e
            }
            ,
            e
        }
        function x() {
            var e = (0,
            r.Z)(["mt-1 outline-none border-0"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        function v() {
            var e = (0,
            r.Z)(["text-right"]);
            return v = function() {
                return e
            }
            ,
            e
        }
        var p = "oai/apps/autoexpandCode";
        function b(e) {
            var n = e.children
              , t = e.temperature
              , r = e.onRestoreDefaults
              , u = e.onChangeModelSetting
              , f = e.position
              , g = e.modelSettings
              , x = e.features
              , v = (0,
            l.useState)(Boolean(c.m.getItem(p)))
              , b = v[0]
              , w = v[1]
              , k = (0,
            l.useCallback)(function(e) {
                u(h.G3.Temperature, e.target.value)
            }, [u])
              , Z = (0,
            l.useCallback)(function(e) {
                w(e),
                c.m.setItem(p, e)
            }, []);
            return (0,
            a.jsxs)(o.J, {
                className: "relative",
                children: [n, (0,
                a.jsx)(i.u, {
                    as: l.Fragment,
                    enter: "transition ease-out duration-200",
                    enterFrom: (0,
                    s.Z)("opacity-0", "top-right" === f ? "translate-x-1" : "translate-y-1"),
                    enterTo: (0,
                    s.Z)("opacity-100", "top-right" === f ? "translate-x-0" : "translate-y-0"),
                    leave: "transition ease-in duration-150",
                    leaveFrom: (0,
                    s.Z)("opacity-100", "top-right" === f ? "translate-x-0" : "translate-y-0"),
                    leaveTo: (0,
                    s.Z)("opacity-0", "top-right" === f ? "translate-x-1" : "translate-y-1"),
                    children: (0,
                    a.jsx)(o.J.Panel, {
                        className: (0,
                        s.Z)("absolute z-20 mt-3 w-screen max-w-xs px-2 sm:px-0", "bottom-center" === f && "right-0 top-6", "bottom-right" === f && "left-2 top-8", "top-right" === f && "left-full top-1/2 ml-6 -translate-y-full"),
                        children: (0,
                        a.jsx)("div", {
                            className: "overflow-hidden rounded-lg text-left text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600",
                            children: (0,
                            a.jsxs)("div", {
                                className: "relative grid gap-6 bg-white px-2 py-1 dark:bg-gray-800 sm:gap-4 sm:p-4",
                                children: [g.has(h.G3.Temperature) && (0,
                                a.jsxs)("div", {
                                    className: "rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",
                                    children: [(0,
                                    a.jsx)("label", {
                                        htmlFor: "temperature",
                                        className: "block text-xs font-medium text-gray-800",
                                        children: "Temperature"
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "mt-1",
                                        children: [(0,
                                        a.jsx)(y, {
                                            type: "number",
                                            name: "temperature",
                                            id: "temperature",
                                            onChange: k,
                                            value: t,
                                            className: "form-input"
                                        }), (0,
                                        a.jsx)(C, {
                                            name: "temperature",
                                            type: "range",
                                            min: "0",
                                            max: "1",
                                            value: t,
                                            className: "range w-full",
                                            step: "0.05",
                                            onChange: k
                                        })]
                                    })]
                                }), x.has("tools2") && (0,
                                a.jsxs)("div", {
                                    className: "flex items-center gap-2 text-white",
                                    children: [(0,
                                    a.jsx)("div", {
                                        children: "Auto-expand code"
                                    }), (0,
                                    a.jsx)(m, {
                                        size: "small",
                                        enabled: b,
                                        onChange: Z
                                    })]
                                }), (0,
                                a.jsx)(j, {
                                    children: (0,
                                    a.jsx)(d.z, {
                                        as: "button",
                                        color: "neutral",
                                        onClick: r,
                                        children: "Restore defaults"
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        }
        var y = u.Z.input(g())
          , C = u.Z.input(x())
          , j = u.Z.div(v())
    },
    1744: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return u
            }
        });
        var r = t(14806)
          , a = t(35250)
          , o = t(48240)
          , i = t(34303);
        function s() {
            var e = (0,
            r.Z)(["animate-spin text-center"]);
            return s = function() {
                return e
            }
            ,
            e
        }
        var l = (0,
        i.Z)(o.dAq)(s());
        function u(e) {
            var n = e.className;
            return (0,
            a.jsx)(l, {
                className: n
            })
        }
    },
    24058: function(e, n, t) {
        "use strict";
        t.d(n, {
            p: function() {
                return r
            }
        });
        var r = (0,
        t(59268).ZP)()(function(e) {
            return {
                enabledPluginIds: [],
                setEnabledPluginIds: function(n) {
                    e({
                        enabledPluginIds: n
                    })
                }
            }
        })
    },
    62588: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return l
            }
        });
        var r = t(87762)
          , a = t(70079)
          , o = t(82018)
          , i = t(60814)
          , s = t(66285);
        function l() {
            var e = (0,
            o.kP)().session
              , n = (0,
            s.hz)()
              , t = (0,
            r.a)(["installedAip"], function() {
                return n.has("tools3") ? i.ZP.getPlugins({
                    offset: 0,
                    limit: 20,
                    isInstalled: !0,
                    accessToken: null == e ? void 0 : e.accessToken
                }) : Promise.resolve({
                    count: 0,
                    items: []
                })
            }, {
                enabled: !!(null == e ? void 0 : e.accessToken),
                onError: function(e) {
                    console.error(e)
                }
            }).data;
            return (0,
            a.useMemo)(function() {
                return {
                    installedPlugins: t ? t.items : []
                }
            }, [t])
        }
    },
    44819: function(e, n, t) {
        "use strict";
        t.d(n, {
            G3: function() {
                return r
            },
            ZP: function() {
                return c
            }
        });
        var r, a, o = t(33861), i = t(31501), s = t(61079), l = t(61432), u = t(70079);
        function c(e, n) {
            var t, a, c = (0,
            l.useRouter)(), d = c.query, f = n || decodeURIComponent(d[r.Model] || ""), m = (0,
            u.useMemo)(function() {
                if (0 !== e.length) {
                    var n, t, r = (null === (n = e.find(function(e) {
                        return e.id === f
                    })) || void 0 === n ? void 0 : n.id) || (null === (t = e.find(function(e) {
                        var n;
                        return (n = e.id).includes("text-davinci")
                    })) || void 0 === t ? void 0 : t.id) || e[0].id;
                    return e.find(function(e) {
                        return e.id === r
                    })
                }
            }, [e, f]), h = parseFloat(d[r.Temperature] || "1"), g = (0,
            u.useCallback)(function(e, n) {
                c.replace({
                    pathname: c.basePath,
                    query: (0,
                    s.Z)((0,
                    i.Z)({}, d), (0,
                    o.Z)({}, e, encodeURIComponent(n)))
                }, void 0, {
                    shallow: !0
                })
            }, [d, c]);
            return (0,
            u.useMemo)(function() {
                return {
                    temperature: h,
                    modelBackend: (null == m ? void 0 : m.id) || "",
                    onChangeModelSetting: g
                }
            }, [g, null == m ? void 0 : m.id, h])
        }
        (a = r || (r = {})).Model = "model",
        a.Temperature = "temperature",
        a.Context = "context"
    },
    11699: function(e, n, t) {
        "use strict";
        t.d(n, {
            Ui: function() {
                return d
            },
            dD: function() {
                return c
            }
        });
        var r, a, o, i = t(33861), s = t(70079);
        (o = r || (r = {})).Small = "small",
        o.Medium = "medium",
        o.Large = "large",
        o.XLarge = "xlarge",
        o.Full = "full";
        var l = (a = {},
        (0,
        i.Z)(a, r.Small, 640),
        (0,
        i.Z)(a, r.Medium, 768),
        (0,
        i.Z)(a, r.Large, 1024),
        (0,
        i.Z)(a, r.XLarge, 1280),
        (0,
        i.Z)(a, r.Full, 1536),
        a);
        function u(e) {
            var n = function() {
                o(t(e))
            }
              , t = function(e) {
                return window.matchMedia(e).matches
            }
              , r = (0,
            s.useState)(t(e))
              , a = r[0]
              , o = r[1];
            return (0,
            s.useEffect)(function() {
                var t = window.matchMedia(e);
                return n(),
                t.addListener ? t.addListener(n) : t.addEventListener("change", n),
                function() {
                    t.removeListener ? t.removeListener(n) : t.removeEventListener("change", n)
                }
            }, [e]),
            a
        }
        function c() {
            return u("(max-width: ".concat(l[r.Medium], "px)"))
        }
        function d() {
            return u("(max-width: ".concat(l[r.Large], "px)"))
        }
    },
    62676: function(e, n, t) {
        "use strict";
        t.d(n, {
            m: function() {
                return o
            }
        });
        var r = t(35025);
        t(70079);
        var a = window.localStorage
          , o = function() {
            function e() {
                (0,
                r.Z)(this, e)
            }
            return e.setItem = function(e, n) {
                if (!a)
                    throw Error("You cannot set localStorage server-side");
                a.setItem(e, JSON.stringify(n))
            }
            ,
            e.getItem = function(e) {
                if (a) {
                    var n = a.getItem(e);
                    return "string" == typeof n ? JSON.parse(n) : n
                }
                return null
            }
            ,
            e.removeItem = function(e) {
                if (a)
                    return a.removeItem(e)
            }
            ,
            e
        }()
    }
}, function(e) {
    e.O(0, [960, 762, 979, 424, 271, 875, 798, 814, 358, 501, 544, 774, 888, 179], function() {
        return e(e.s = 49529)
    }),
    _N_E = e.O()
}
]);
