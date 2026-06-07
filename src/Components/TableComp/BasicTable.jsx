import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

// ── Dark crypto theme ──────────────────────────────────────────────────────────
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0d0f14", paper: "#13161e" },
    text: { primary: "#e8eaf0", secondary: "#6b7280" },
  },
  typography: {
    fontFamily: '"DM Mono", "Roboto Mono", monospace',
  },
});


// ── Styled components ──────────────────────────────────────────────────────────
const StyledPaper = styled(Paper)({
  background: "linear-gradient(145deg, #13161e 0%, #0f1219 100%)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: 16,
  boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
  overflow: "hidden",
});


const StyledTableHead = styled(TableHead)({
  "& .MuiTableCell-head": {
    background: "rgba(255,255,255,0.03)",
    color: "#6b7280",
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "14px 20px",
  },
});
 
const StyledTableRow = styled(TableRow)({
  cursor: "pointer",
  transition: "background 0.18s ease",
  "&:hover": {
    background: "rgba(255,255,255,0.035)",
  },
  "& .MuiTableCell-root": {
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    padding: "16px 20px",
    color: "#e8eaf0",
    fontSize: "0.875rem",
  },
  "&:last-child .MuiTableCell-root": { borderBottom: "none" },
});
 
const PriceChange = styled(Box)(({ positive }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  color: positive === "true" ? "#22c55e" : "#ef4444",
  fontWeight: 600,
  fontSize: "0.82rem",
  letterSpacing: "0.02em",
}));
 
const CoinName = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 14,
});
 
const RankBadge = styled(Box)({
  width: 22,
  height: 22,
  borderRadius: 6,
  background: "rgba(255,255,255,0.06)",
  color: "#6b7280",
  fontSize: "0.68rem",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});
 
// ── Data ───────────────────────────────────────────────────────────────────────
function createCoin(rank, name, symbol, color, volume, marketCap, change24h, price) {
  return { rank, name, symbol, color, volume, marketCap, change24h, price };
}
 
const coins = [
  createCoin(1, "Bitcoin",         "BTC",  "#F7931A", 10044362317,  1365555235049, -0.29955,  69270),
  createCoin(2, "Ethereum",        "ETH",  "#627EEA",  6536188957,   441608318581, -0.35545,  3674.32),
  createCoin(3, "Tether",          "USDT", "#26A17B", 18145520690,   112444721150,  0.04730,  0.999856),
  createCoin(4, "BNB",             "BNB",  "#F0B90B",   951847495,   103803902784, -1.01410,  675.06),
  createCoin(5, "Solana",          "SOL",  "#9945FF",  1681220355,    72631485279, -3.04982,  157.82),
  createCoin(6, "Lido Staked Ether","STETH","#00A3FF",   21170942,    34956930748, -0.39229,  3672.74),
  createCoin(7, "USDC",            "USDC", "#2775CA",  2287711895,    32204778711,  0.04232,  1),
  createCoin(8, "XRP",             "XRP",  "#00AAE4",   605269074,    27379361467, -1.29312,  0.493414),
  createCoin(9, "Dogecoin",        "DOGE", "#C2A633",   773312294,    21096388016, -1.68789,  0.145855),
  createCoin(4, "BNB",             "BNB",  "#F0B90B",   951847495,   103803902784, -1.01410,  675.06),
  createCoin(5, "Solana",          "SOL",  "#9945FF",  1681220355,    72631485279, -3.04982,  157.82),
  createCoin(6, "Lido Staked Ether","STETH","#00A3FF",   21170942,    34956930748, -0.39229,  3672.74),
  createCoin(7, "USDC",            "USDC", "#2775CA",  2287711895,    32204778711,  0.04232,  1),
  createCoin(8, "XRP",             "XRP",  "#00AAE4",   605269074,    27379361467, -1.29312,  0.493414),
  createCoin(9, "Dogecoin",        "DOGE", "#C2A633",   773312294,    21096388016, -1.68789,  0.145855),
];
 
// ── Helpers ────────────────────────────────────────────────────────────────────
const fmt = {
  price: (v) =>
    v >= 1
      ? `$${v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `$${v.toFixed(6)}`,
  volume: (v) => `$${(v / 1e9).toFixed(2)}B`,
  mcap:   (v) => `$${(v / 1e9).toFixed(2)}B`,
};



export default function BasicTable() {
  const [hovered, setHovered] = useState(null);
 
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ p: { xs: 1, md: 3 }, background: "#0d0f14", minHeight: "100vh" }}>
        {/* Header */}
        <Box sx={{ mb: 3, px: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"DM Mono", monospace',
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#e8eaf0",
              mb: 0.5,
            }}
          >
            Market Overview
          </Typography>
          <Typography variant="caption" sx={{ color: "#6b7280", letterSpacing: "0.08em" }}>
            TOP ASSETS BY MARKET CAP · LIVE
          </Typography>
        </Box>
 
        <StyledPaper elevation={0}>
          <TableContainer>
            <Table aria-label="crypto market table">
              <StyledTableHead>
                <TableRow>
                  <TableCell align="center" sx={{ width: 50 }}>#</TableCell>
                  <TableCell>Coin</TableCell>
                  <TableCell align="right">Symbol</TableCell>
                  <TableCell align="right">Volume (24h)</TableCell>
                  <TableCell align="right">Market Cap</TableCell>
                  <TableCell align="right">24h %</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </StyledTableHead>
 
              <TableBody>
                {coins.map((coin) => {
                  const isPositive = coin.change24h >= 0;
                  return (
                    <StyledTableRow
                      key={coin.symbol}
                      onMouseEnter={() => setHovered(coin.symbol)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Rank */}
                      <TableCell align="center">
                        <RankBadge>{coin.rank}</RankBadge>
                      </TableCell>
 
                      {/* Coin name + avatar */}
                      <TableCell>
                        <CoinName>
                          <Avatar
                            sx={{
                              width: 36,
                              height: 36,
                              bgcolor: coin.color + "22",
                              border: `1.5px solid ${coin.color}55`,
                              fontSize: "0.65rem",
                              fontWeight: 800,
                              color: coin.color,
                              letterSpacing: "-0.02em",
                              flexShrink: 0,
                            }}
                          >
                            {coin.symbol.slice(0, 2)}
                          </Avatar>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                color: "#e8eaf0",
                                lineHeight: 1.2,
                              }}
                            >
                              {coin.name}
                            </Typography>
                          </Box>
                        </CoinName>
                      </TableCell>
 
                      {/* Symbol */}
                      <TableCell align="right">
                        <Chip
                          label={coin.symbol}
                          size="small"
                          sx={{
                            background: coin.color + "18",
                            color: coin.color,
                            border: `1px solid ${coin.color}30`,
                            fontFamily: '"DM Mono", monospace',
                            fontWeight: 700,
                            fontSize: "0.7rem",
                            letterSpacing: "0.06em",
                            height: 22,
                          }}
                        />
                      </TableCell>
 
                      {/* Volume */}
                      <TableCell align="right" sx={{ color: "#9ca3af !important" }}>
                        {fmt.volume(coin.volume)}
                      </TableCell>
 
                      {/* Market cap */}
                      <TableCell align="right" sx={{ color: "#9ca3af !important" }}>
                        {fmt.mcap(coin.marketCap)}
                      </TableCell>
 
                      {/* 24h change */}
                      <TableCell align="right">
                        <PriceChange positive={isPositive.toString()}>
                          {isPositive ? (
                            <TrendingUpIcon sx={{ fontSize: 14 }} />
                          ) : (
                            <TrendingDownIcon sx={{ fontSize: 14 }} />
                          )}
                          {isPositive ? "+" : ""}
                          {coin.change24h.toFixed(4)}%
                        </PriceChange>
                      </TableCell>
 
                      {/* Price */}
                      <TableCell align="right">
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            color:
                              hovered === coin.symbol
                                ? coin.color
                                : "#e8eaf0",
                            transition: "color 0.18s ease",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {fmt.price(coin.price)}
                        </Typography>
                      </TableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper>
      </Box>
    </ThemeProvider>
  );
}